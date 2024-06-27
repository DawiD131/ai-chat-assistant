import { defineStore } from "pinia";
import type OpenAI from "openai";
import { useChatAssistantApi } from "~/features/chatAssistant/api/useChatAssistantApi";
import { useToolsStore } from "~/features/chatAssistant/stores/useToolsStore";
import { useSupabaseClient } from "#imports";
import type { Database, Json } from "~~/models/database";

export const useConversationStore = defineStore("useConversationStore", () => {
  const currentConversation = ref<OpenAI.ChatCompletionMessageParam[]>([]);
  const currentId = ref<string | null>(null);

  const supabaseClient = useSupabaseClient<Database>();
  const toolsStore = useToolsStore();

  const { createChatCompletion, save } = useChatAssistantApi();

  const pushMessage = async (content: string) => {
    currentConversation.value.push({ role: "user", content });

    const { answer } = await createChatCompletion({
      systemPrompt: toolsStore.currentTool.prompt,
      conversation: currentConversation.value,
    });

    if (!answer)
      throw new Error("There is something wrong with generating answer");

    currentConversation.value.push({
      role: "assistant",
      content: answer,
    });

    currentId.value = await save({
      id: currentId.value,
      conversation: currentConversation.value,
    });
  };

  const clearConversation = () => {
    currentConversation.value = [];
    currentId.value = null;
  };

  const restoreConversationById = async (id: string) => {
    const { error, data } = await supabaseClient
      .from("conversation")
      .select()
      .eq("id", id);

    if (error) throw new Error(error.message);

    if (data && data[0] && data[0].content) {
      currentConversation.value = (data[0].content as any).filter(
        (it: any) => it.role !== "system",
      ) as any;
      currentId.value = data[0].id;
    }
  };

  return {
    currentConversation,
    currentId,
    pushMessage,
    clearConversation,
    restoreConversationById,
  };
});
