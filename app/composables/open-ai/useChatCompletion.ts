import { useOpenAi } from "~/composables/open-ai/useOpenAi";
import OpenAI from "openai";

export const useChatCompletion = () => {
  const openAi = useOpenAi();
  const createCompletion = ({
    messages,
    model,
  }: {
    messages: OpenAI.ChatCompletionMessageParam[];
    model: OpenAI.Chat.ChatModel;
  }) => {
    return openAi.chat.completions.create({
      messages,
      model,
    });
  };

  return {
    createCompletion,
  };
};
