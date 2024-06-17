<script lang="ts" setup>
import Prompter from "~/components/Prompter.vue";
import ToolSelector from "~/components/ToolSelector.vue";

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div
    class="flex flex-col min-h-[100dvh] max-h-[100dvh] justify-center px-4 py-4 max-w-screen-xl mx-auto gap-4"
  >
    <ToolSelector />
    <ConversationView />
    <Prompter />
  </div>
</template>
