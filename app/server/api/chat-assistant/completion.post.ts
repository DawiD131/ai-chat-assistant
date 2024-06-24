import { useOpenAi } from "~/server/lib/openAi/useOpenAi";

type Response = Promise<{ answer: string | null }>;
export default defineEventHandler(async (event): Response => {
  const body = await readBody(event);

  const openAi = useOpenAi();

  const resp = await openAi.chat.completions.create({
    messages: body.messages,
    model: body.model,
  });

  return {
    answer: resp.choices[0].message.content,
  };
});
