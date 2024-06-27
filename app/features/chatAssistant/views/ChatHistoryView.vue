<script setup lang="ts">
import { useConversationHistory } from "~/features/chatAssistant/composables/useConversationHistory";

const { conversations, restoreConversation, deleteConversation } =
  useConversationHistory();

const formatDate = (date: Date) => {
  return `${date.getFullYear()}-${date.getDate()}-${date.getMonth() + 1} ${date.getHours()}:${date.getMinutes()}`;
};
</script>

<template>
  <AssistantLayout>
    <div
      v-for="conversation in conversations"
      class="rounded-md border border-primary p-3 flex justify-between items-center"
    >
      <span class="text-sm">
        {{ formatDate(new Date((conversation as any).created_at)) }}
      </span>
      <div class="flex gap-2">
        <UButton
          icon="i-heroicons-pencil-square"
          size="2xs"
          color="blue"
          variant="solid"
          :trailing="false"
          @click="restoreConversation(conversation.id)"
        />
        <UButton
          icon="i-heroicons-pencil-square"
          size="2xs"
          color="red"
          variant="solid"
          :trailing="false"
          @click="deleteConversation(conversation.id)"
        />
      </div>
    </div>
  </AssistantLayout>
</template>
