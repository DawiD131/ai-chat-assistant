a
<script lang="ts" setup>
import { ChatHistoryView } from "~/features/chatAssistant";

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <ChatHistoryView />
</template>
