<script setup lang="ts">
import { useAudioRecorder } from "~/features/chatAssistant/composables/useAudioRecorder";
import { useConversationStore } from "~/features/chatAssistant/stores/useConversationStore";
import { useChatAssistantApi } from "~/features/chatAssistant/api/useChatAssistantApi";

const { startRecording, stopRecording, isRecording, blob } = useAudioRecorder();
const conversationStore = useConversationStore();
const { speechToText } = useChatAssistantApi();

watch(blob, async (value) => {
  const formData = new FormData();
  formData.append("file", value);

  if (!value) return;

  const text = await speechToText(formData);
  await conversationStore.pushMessage(text);
});
</script>

<template>
  <div>
    <UButton
      v-if="isRecording"
      icon="i-heroicons-stop-circle"
      size="md"
      color="red"
      square
      variant="solid"
      block
      @click="stopRecording"
    />
    <UButton
      v-else
      icon="i-heroicons-microphone"
      size="md"
      color="primary"
      square
      variant="solid"
      block
      @click="startRecording"
    />
  </div>
</template>
