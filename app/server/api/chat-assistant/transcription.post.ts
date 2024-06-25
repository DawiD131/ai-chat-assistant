import { useOpenAi } from "~/server/lib/openAi/useOpenAi";
import { toFile } from "openai";

export default defineEventHandler(async (event): Promise<{ text: string }> => {
  const files = await readMultipartFormData(event);
  const openAi = useOpenAi();

  if (files) {
    const { text } = await openAi.audio.transcriptions.create({
      file: await toFile(Buffer.from(files[0].data), "audio.wav"),
      model: "whisper-1",
    });

    return {
      text,
    };
  }

  throw createError({
    statusMessage: "Something went wrong",
    statusCode: 500,
  });
});
