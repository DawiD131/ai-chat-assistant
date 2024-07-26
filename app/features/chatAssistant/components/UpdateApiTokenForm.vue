<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent } from "#ui/types";
import { useUserSettingsStore } from "~/features/chatAssistant/core/userSettings/useUserSettingsStore";

const userSettingsStore = useUserSettingsStore();

const schema = object({
  token: string().required("Required"),
});

type Schema = InferType<typeof schema>;

const state = reactive({
  token: undefined,
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  await userSettingsStore.updateUserSettings({
    openAiApiKey: state.token,
  });
  state.token = undefined;
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="OpenAi api token" name="token">
      <UInput
        v-model="state.token"
        type="password"
        placeholder="Your OpenAi api token"
      />
    </UFormGroup>

    <UButton type="submit" block>Update token</UButton>
  </UForm>
</template>
