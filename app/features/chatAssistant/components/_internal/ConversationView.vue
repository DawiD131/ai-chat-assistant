<script lang="ts" setup>
import { useConversationStore } from "~/features/chatAssistant/stores/useConversationStore";
import ChatBubble from "~/features/chatAssistant/components/_internal/ChatBubble.vue";

const conversationStore = useConversationStore();
</script>

<template>
  <div
    :class="$style.root"
    class="flex flex-col justify-self-start gap-4 px-2 overflow-scroll"
    style="height: calc(100dvh - 124px)"
  >
    <ChatBubble
      v-for="(message, index) in conversationStore.currentConversation"
      :key="index"
      :message="message.content"
      :is-answer="message.role === 'assistant'"
    />
  </div>
</template>

<style module>
.root::-webkit-scrollbar {
  width: 4px;
}

.root::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
  display: none;
}

.root::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 50px;
}

.root::-webkit-scrollbar-corner {
  background-color: transparent;
}
.root > :nth-child(odd) {
  align-self: end;
}

.root > :nth-child(even) {
  align-self: start;
}
</style>
