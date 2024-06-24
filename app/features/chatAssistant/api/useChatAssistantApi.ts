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
        model: "gpt-4-turbo",
      },
    });

    return answer;
  };

  const speechToText = async (file: any): Promise<string> => {
    const { text } = await $fetch("/api/chat-assistant/transcription", {
      method: "post",
      body: file,
    });

    return text;
  };

  return {
    createChatCompletion,
    speechToText,
  };
};
