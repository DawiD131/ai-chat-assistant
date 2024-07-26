<script setup lang="ts">
import { useConversationStore } from "~/features/chatAssistant/core/conversation/useConversationStore";
import { useConversationHistoryStore } from "~/features/chatAssistant/core/conversation/useConversationHistoryStore";

const conversationHistoryStore = useConversationHistoryStore();
const conversationStore = useConversationStore();

onBeforeMount(() => conversationHistoryStore.loadHistory());

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1} ${date.getHours()}:${date.getMinutes()}`;
};
</script>

<template>
  <AssistantLayout>
    <div
      v-for="conversation in conversationHistoryStore.conversationHistory"
      class="rounded-md border border-primary p-3 flex justify-between items-center"
    >
      <span class="text-sm">
        {{ formatDate(new Date((conversation as any).createdAt)) }}
      </span>
      <div class="flex gap-2">
        <UButton
          icon="i-heroicons-arrow-path"
          size="2xs"
          color="blue"
          variant="solid"
          :trailing="false"
          @click="conversationStore.restoreConversationById(conversation.id)"
        />
        <UButton
          icon="i-heroicons-trash"
          size="2xs"
          color="red"
          variant="solid"
          :trailing="false"
          @click="conversationHistoryStore.deleteConversation(conversation.id)"
        />
      </div>
    </div>
  </AssistantLayout>
</template>
