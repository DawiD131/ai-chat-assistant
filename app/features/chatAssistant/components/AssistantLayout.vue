<script lang="ts" setup>
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
  <ClientOnly>
    <div
      class="flex flex-col min-h-[100dvh] max-h-[100dvh] px-4 pt-4 pb-8 max-w-screen-xl mx-auto gap-2"
    >
      <UHorizontalNavigation
        :links="links"
        class="border-b border-gray-200 dark:border-gray-800 mb-4"
      />
      <slot />
    </div>
  </ClientOnly>
</template>
