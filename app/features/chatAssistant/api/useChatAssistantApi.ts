import type OpenAI from "openai";
export const useChatAssistantApi = () => {
  const createChatCompletion = async ({
    systemPrompt,
    conversation,
  }: {
    systemPrompt: string;
    conversation: OpenAI.ChatCompletionMessageParam[];
  }) => {
    const { answer } = await $fetch("/api/chat-assistant/completion", {
      method: "post",
      body: {
        messages: [{ role: "system", content: systemPrompt }, ...conversation],
        model: "gpt-3.5-turbo",
      },
    });

    return answer;
  };

  return {
    createChatCompletion,
  };
};
