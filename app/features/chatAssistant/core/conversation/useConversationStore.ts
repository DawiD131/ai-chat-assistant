import { defineStore } from "pinia";
import { useApiRepository } from "~/features/chatAssistant/composables/useApiRepository";

export const useConversationStore = defineStore("useConversationStore", () => {
  const currentConversation = ref<any[]>([]);
  const currentId = ref<string | null>(null);

  const apiRepository = useApiRepository();

  const pushMessage = async (content: string) => {
    currentConversation.value.push({ role: "user", content });

    const { answer } = await apiRepository.entryRepository.entryQuery({
      content,
      role: "user",
    });

    if (!answer)
      throw new Error("There is something wrong with generating answer");

    currentConversation.value.push({
      role: "assistant",
      content: answer,
    });
  };

  const clearConversation = () => {
    currentConversation.value = [];
    currentId.value = null;
  };

  const restoreConversationById = async (id: string) => {};

  return {
    currentConversation,
    currentId,
    pushMessage,
    clearConversation,
    restoreConversationById,
  };
});
