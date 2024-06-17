import { defineStore } from "pinia";
import type OpenAI from "openai";
import { generalAssistantPrompt } from "~/features/chatAssistant/prompts/tools";
import { useChatAssistantApi } from "~/features/chatAssistant/api/useChatAssistantApi";

export const useConversationStore = defineStore("useConversationStore", () => {
  const currentConversation = ref<OpenAI.ChatCompletionMessageParam[]>([]);
  const systemPrompt = ref(generalAssistantPrompt);

  const { createChatCompletion } = useChatAssistantApi();

  const pushMessage = async (content: string) => {
    currentConversation.value.push({ role: "user", content });

    const answer = await createChatCompletion({
      systemPrompt: systemPrompt.value,
      conversation: currentConversation.value,
    });

    if (!answer)
      throw new Error("There is something wrong with generating answer");

    currentConversation.value.push({
      role: "assistant",
      content: answer,
    });
  };

  const setSystemPrompt = (content: string) => (systemPrompt.value = content);

  return {
    currentConversation,
    pushMessage,
    setSystemPrompt,
  };
});
