<script lang="ts" setup>
import { useConversationStore } from "~/features/chatAssistant/stores/useConversationStore";

const inputValue = ref("");

const conversationStore = useConversationStore();

conversationStore.setSystemPrompt("Always answer in markdown format");
const send = () => {
  conversationStore.pushMessage(inputValue.value);
  inputValue.value = "";
};
</script>

<template>
  <div>
    <UTextarea v-model="inputValue" />
    <UButton
      icon="i-heroicons-paper-airplane"
      size="md"
      color="primary"
      variant="solid"
      label="Send"
      trailing
      block
      class="mt-4"
      @click="send"
    />
  </div>
</template>
