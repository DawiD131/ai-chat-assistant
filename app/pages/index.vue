<script lang="ts" setup>
import { ChatAssistant } from "~/features/chatAssistant";

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <ChatAssistant />
</template>
