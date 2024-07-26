<script lang="ts" setup>
import { useConversationStore } from "~/features/chatAssistant/core/conversation/useConversationStore";

const conversationStore = useConversationStore();

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

    <div class="flex gap-2 mt-4 box-border">
      <div class="basis-[100%]">
        <UButton
          size="md"
          color="primary"
          variant="solid"
          label="Send"
          trailing
          block
          type="submit"
          icon="i-heroicons-paper-airplane"
        />
      </div>
      <UButton
        icon="i-heroicons-arrow-path"
        @click="conversationStore.clearConversation"
      />
    </div>
  </UForm>
</template>
