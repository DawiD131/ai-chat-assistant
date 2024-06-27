import { serverSupabaseClient, serverSupabaseSession } from "#supabase/server";
import { Database } from "~~/models/database";

type Response = Promise<{ conversationId: string }>;
export default defineEventHandler(async (event): Response => {
  const body = await readBody(event);
  const client = await serverSupabaseClient<Database>(event);
  const session = await serverSupabaseSession(event);

  const upsertValues = body.conversationId
    ? {
        content: body.conversation,
        user_id: session?.user.id,
        id: body.id,
      }
    : {
        content: body.conversation,
        user_id: session?.user.id,
      };

  const { error, data } = await client
    .from("conversation")
    .upsert(upsertValues, {
      onConflict: "id",
    })
    .eq("id", body.id)
    .select();

  if (error)
    createError({
      statusMessage: "Something went wrong",
      statusCode: 500,
    });

  return {
    conversationId: data![0].id,
  };
});
