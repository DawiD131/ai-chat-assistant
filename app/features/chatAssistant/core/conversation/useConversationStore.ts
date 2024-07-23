import { defineStore } from "pinia";
import { useApiRepository } from "~/features/chatAssistant/composables/useApiRepository";

export const useConversationStore = defineStore("useConversationStore", () => {
  const currentConversation = ref<any[]>([]);
  const router = useRouter();

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
  };

  const restoreConversationById = async (id: string) => {
    const resp =
      await apiRepository.conversationRepository.getConversationById(id);
    currentConversation.value = (resp as any).messages;

    await router.push("/chat-assistant");
  };

  return {
    currentConversation,
    pushMessage,
    clearConversation,
    restoreConversationById,
  };
});
