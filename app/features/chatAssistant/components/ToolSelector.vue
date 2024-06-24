<script lang="ts" setup>
import { useToolsStore } from "~/features/chatAssistant/stores/useToolsStore";

const toolsStore = useToolsStore();
</script>

<template>
  <UFormGroup label="Current mode">
    <USelectMenu
      searchable
      searchable-placeholder="Search a tool..."
      class="w-full mb-4"
      placeholder="Select a tool"
      :options="toolsStore.availableToolsCollection"
      v-model="toolsStore.currentToolId"
      value-attribute="id"
      option-attribute="name"
    />
  </UFormGroup>
</template>
