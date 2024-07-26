import { useApiRepository } from "~/features/chatAssistant/composables/useApiRepository";

export const useConversationHistoryStore = defineStore(
  "useConversationHistory",
  () => {
    const apiRepository = useApiRepository();
    const conversationHistory = ref<any>([]);

    const loadHistory = async () => {
      conversationHistory.value =
        await apiRepository.conversationRepository.getAllConversations();
    };

    const deleteConversation = async (id: string) => {
      await apiRepository.conversationRepository.deleteConversation(id);
      await loadHistory();
    };

    return {
      conversationHistory,
      loadHistory,
      deleteConversation,
    };
  },
);
