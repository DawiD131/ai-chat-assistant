<script lang="ts" setup>
import Prompter from "~/components/Prompter.vue";
import ToolSelector from "~/components/ToolSelector.vue";
</script>

<template>
  <div
    class="flex flex-col min-h-screen justify-between px-4 py-4 max-w-screen-xl mx-auto"
  >
    <div>
      <ToolSelector />
      <ConversationView />
    </div>
    <Prompter />
  </div>
</template>
