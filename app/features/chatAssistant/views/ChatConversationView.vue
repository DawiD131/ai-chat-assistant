<script lang="ts" setup>
import AssistantLayout from "~/features/chatAssistant/components/AssistantLayout.vue";

const route = useRoute();

const links = [
  {
    label: "Chat",
    icon: "i-heroicons-chat-bubble-left-right",
    to: "/chat-assistant",
  },
  {
    label: "Settings",
    icon: "i-heroicons-cog-8-tooth",
    to: `/chat-assistant/settings`,
  },
  {
    label: "History",
    icon: "i-heroicons-list-bullet",
    to: "/chat-assistant/history",
  },
];
</script>
<template>
  <AssistantLayout>
    <ConversationView />
    <Prompter />
  </AssistantLayout>
</template>
