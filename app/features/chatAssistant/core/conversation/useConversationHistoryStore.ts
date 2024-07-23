import { useApiRepository } from "~/features/chatAssistant/composables/useApiRepository";

export const useConversationHistoryStore = defineStore(
  "useConversationHistory",
  () => {
    const apiRepository = useApiRepository();
    const conversationHistory = ref<any>([]);

    const fetchHistory = async () => {
      const resp =
        await apiRepository.conversationRepository.getAllConversations();

      conversationHistory.value = resp;
    };

    return {
      conversationHistory,
      fetchHistory,
    };
  },
);
