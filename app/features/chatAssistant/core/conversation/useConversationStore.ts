import { defineStore } from "pinia";
import { useApiRepository } from "~/features/chatAssistant/composables/useApiRepository";

export const useConversationStore = defineStore("useConversationStore", () => {
  const currentConversation = ref<any[]>([]);
  const router = useRouter();
  const currentConversationId = ref<undefined | string>(undefined);

  const apiRepository = useApiRepository();

  const pushMessage = async (content: string) => {
    currentConversation.value.push({ role: "user", content });

    const { answer, conversationId } =
      await apiRepository.entryRepository.entryQuery({
        content,
        role: "user",
        conversationId: currentConversationId.value,
      });

    if (!answer)
      throw new Error("There is something wrong with generating answer");

    currentConversationId.value = conversationId;

    currentConversation.value.push({
      role: "assistant",
      content: answer,
    });
  };

  const clearConversation = () => {
    currentConversation.value = [];
    currentConversationId.value = undefined;
  };

  const restoreConversationById = async (id: string) => {
    const resp =
      await apiRepository.conversationRepository.getConversationById(id);
    currentConversation.value = (resp as any).messages;

    currentConversationId.value = id;

    await router.push("/chat-assistant");
  };

  return {
    currentConversation,
    pushMessage,
    clearConversation,
    restoreConversationById,
  };
});
