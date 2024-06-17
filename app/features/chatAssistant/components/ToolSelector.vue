<script lang="ts" setup>
import {
  generalAssistantPrompt,
  translatorPrompt,
} from "~/features/chatAssistant/prompts/tools";
import { useConversationStore } from "~/features/chatAssistant/stores/useConversationStore";

const conversationStore = useConversationStore();

const options = [
  {
    name: "General assistant",
    id: 1,
    prompt: generalAssistantPrompt,
  },
  {
    name: "Translator",
    id: 2,
    prompt: translatorPrompt,
  },
];

const currentId = ref(1);

watch(
  currentId,
  (id) => {
    const prompt = options.find((it) => it.id === id)?.prompt;
    if (!prompt) throw new Error("Prompt does not exist");
    conversationStore.setSystemPrompt(prompt);
  },
  {
    immediate: true,
  },
);
</script>

<template>
  <USelectMenu
    searchable
    searchable-placeholder="Search a tool..."
    class="w-full lg:w-48 mb-4"
    placeholder="Select a tool"
    :options="
      options.map((it) => ({
        id: it.id,
        name: it.name,
      }))
    "
    v-model="currentId"
    value-attribute="id"
    option-attribute="name"
  />
</template>
