<script lang="ts" setup>
import { ChatConversationView } from "~/features/chatAssistant";

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <ChatConversationView />
</template>
