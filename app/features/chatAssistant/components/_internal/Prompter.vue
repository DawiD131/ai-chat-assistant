<script lang="ts" setup>
import { useConversationStore } from "~/features/chatAssistant/stores/useConversationStore";

const conversationStore = useConversationStore();

conversationStore.setSystemPrompt("Always answer in markdown format");

const state = reactive({
  message: "",
});

const onSubmit = () => {
  conversationStore.pushMessage(state.message);
  state.message = "";
};
</script>

<template>
  <UForm
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
    @keyup.enter="onSubmit"
  >
    <UFormGroup name="message">
      <UTextarea v-model="state.message" />
    </UFormGroup>

    <UButton
      icon="i-heroicons-paper-airplane"
      size="md"
      color="primary"
      variant="solid"
      label="Send"
      trailing
      block
      class="mt-4"
      type="submit"
    />
  </UForm>
</template>
