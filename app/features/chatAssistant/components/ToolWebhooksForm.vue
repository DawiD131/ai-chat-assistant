<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { useUserSettingsStore } from "~/features/chatAssistant/core/userSettings/useUserSettingsStore";

const userSettingsStore = useUserSettingsStore();

const schema = object({
  todolist: string(),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  todolist: "",
});

onMounted(async () => {
  await userSettingsStore.loadUserSettings();
  state.todolist = userSettingsStore.userSettings?.todoListWebhook ?? "";
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await userSettingsStore.updateUserSettings({
    todoListWebhook: state.todolist,
  });
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Todo list webhook" name="todolist">
      <UInput
        v-model="state.todolist"
        type="text"
        placeholder="Todo list webhook url"
      />
    </UFormGroup>

    <UButton type="submit" block>Update webhooks</UButton>
  </UForm>
</template>
