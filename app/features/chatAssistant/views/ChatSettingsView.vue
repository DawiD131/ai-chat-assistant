<script setup lang="ts">
import AssistantLayout from "~/features/chatAssistant/components/AssistantLayout.vue";
</script>

<template>
  <AssistantLayout>
    <div class="flex flex-col gap-10">
      <ToolWebhooksForm />
      <UpdateApiTokenForm />
    </div>
  </AssistantLayout>
</template>
