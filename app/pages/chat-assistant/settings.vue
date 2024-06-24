<script lang="ts" setup>
import { ChatSettingsView } from "~/features/chatAssistant";

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <ChatSettingsView />
</template>
