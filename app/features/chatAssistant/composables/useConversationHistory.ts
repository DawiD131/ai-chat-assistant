import { useConversationStore } from "~/features/chatAssistant/stores/useConversationStore";

export const useConversationHistory = () => {
  const router = useRouter();
  const client = useSupabaseClient();
  const conversationStore = useConversationStore();

  const { refresh, data: conversations } = useAsyncData(
    "conversation",
    async () => {
      const { data } = await client
        .from("conversation")
        .select("content, id, created_at")
        .order("created_at", { ascending: false });
      return data;
    },
  );

  const deleteConversation = async (id: string) => {
    await client.from("conversation").delete().eq("id", id);
    await refresh();
  };

  const restoreConversation = async (id: string) => {
    await conversationStore.restoreConversationById(id);
    await router.push("/chat-assistant");
  };

  return {
    conversations,
    deleteConversation,
    restoreConversation,
  };
};
