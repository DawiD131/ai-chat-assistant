<script setup lang="ts">
import AssistantLayout from "~/features/chatAssistant/components/AssistantLayout.vue";
import { useConversationStore } from "~/features/chatAssistant/core/conversation/useConversationStore";

const conversationStore = useConversationStore();
const router = useRouter();

const clearConversation = async () => {
  conversationStore.clearConversation();
  await router.push("/chat-assistant");
};
</script>

<template>
  <AssistantLayout>
    <UButton
      icon="i-heroicons-arrow-path"
      size="sm"
      color="primary"
      variant="solid"
      label="New chat"
      block
      :trailing="false"
      @click="clearConversation"
    />
  </AssistantLayout>
</template>
