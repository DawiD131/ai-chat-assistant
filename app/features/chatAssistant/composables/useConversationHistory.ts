import { useConversationStore } from "~/features/chatAssistant/core/conversation/useConversationStore";

export const useConversationHistory = () => {
  const router = useRouter();
  const conversationStore = useConversationStore();

  const { refresh, data: conversations } = useAsyncData(
    "conversation",
    async () => {},
  );

  const deleteConversation = async (id: string) => {
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
