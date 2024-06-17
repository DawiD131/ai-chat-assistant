import OpenAI from "openai";

export const useOpenAi = () => {
  const config = useRuntimeConfig();

  return new OpenAI({
    apiKey: config.public.openAiApiKey,
    dangerouslyAllowBrowser: true,
  });
};
