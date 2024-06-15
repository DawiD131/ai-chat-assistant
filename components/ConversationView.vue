<script lang="ts" setup>
import { useConversationStore } from "~/stores/useConversationStore";

const conversationStore = useConversationStore();
</script>

<template>
  <div :class="$style.root" class="flex flex-col gap-4 mx-4">
    <ChatBubble
      v-for="(message, index) in conversationStore.currentConversation"
      :key="index"
      :message="message.content"
      :is-answer="message.role === 'assistant'"
    />
  </div>
</template>

<style module>
.root > :nth-child(odd) {
  align-self: end;
}

.root > :nth-child(even) {
  align-self: start;
}
</style>
