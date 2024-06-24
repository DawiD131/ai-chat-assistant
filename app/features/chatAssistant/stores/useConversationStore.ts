import { defineStore } from "pinia";
import type OpenAI from "openai";
import { useChatAssistantApi } from "~/features/chatAssistant/api/useChatAssistantApi";
import { useToolsStore } from "~/features/chatAssistant/stores/useToolsStore";

export const useConversationStore = defineStore("useConversationStore", () => {
  const currentConversation = ref<OpenAI.ChatCompletionMessageParam[]>([]);

  const toolsStore = useToolsStore();

  const { createChatCompletion } = useChatAssistantApi();

  const pushMessage = async (content: string) => {
    currentConversation.value.push({ role: "user", content });

    const answer = await createChatCompletion({
      systemPrompt: toolsStore.currentTool.prompt,
      conversation: currentConversation.value,
    });

    if (!answer)
      throw new Error("There is something wrong with generating answer");

    currentConversation.value.push({
      role: "assistant",
      content: answer,
    });
  };

  return {
    currentConversation,
    pushMessage,
  };
});
