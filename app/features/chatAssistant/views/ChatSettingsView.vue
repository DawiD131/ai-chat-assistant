<script setup lang="ts">
import AssistantLayout from "~/features/chatAssistant/components/AssistantLayout.vue";
import { useConversationStore } from "~/features/chatAssistant/stores/useConversationStore";

const conversationStore = useConversationStore();
const router = useRouter();
const clearConversation = () => {
  conversationStore.clearConversation();
  router.push("/chat-assistant");
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
    <ToolSelector />
  </AssistantLayout>
</template>
