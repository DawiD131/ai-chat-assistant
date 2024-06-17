import { useChatCompletion } from "~/composables/open-ai/useChatCompletion";
import { defineStore } from "pinia";
import type OpenAI from "openai";
import { generalAssistantPrompt } from "~/features/chatAssistant/prompts/tools";

export const useConversationStore = defineStore("useConversationStore", () => {
  const currentConversation = ref<OpenAI.ChatCompletionMessageParam[]>([]);
  const systemPrompt = ref(generalAssistantPrompt);

  const { createCompletion } = useChatCompletion();

  const pushMessage = async (content: string) => {
    currentConversation.value.push({ role: "user", content });
    const response = await createCompletion({
      messages: [
        { role: "system", content: systemPrompt.value },
        ...currentConversation.value,
      ],
      model: "gpt-3.5-turbo",
    });

    currentConversation.value.push({
      role: "assistant",
      content: response.choices[0].message.content,
    });
  };

  const setSystemPrompt = (content: string) => (systemPrompt.value = content);

  return {
    currentConversation,
    pushMessage,
    setSystemPrompt,
  };
});
