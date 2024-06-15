<script lang="ts" setup>
import Prompter from "~/components/Prompter.vue";
</script>

<template>
  <div
    class="flex flex-col min-h-screen justify-between px-4 py-8 max-w-screen-xl mx-auto"
  >
    <div>
      <USelectMenu
        searchable
        searchable-placeholder="Search a person..."
        class="w-full lg:w-48"
        placeholder="Select a person"
        :options="[
          'Wade Cooper',
          'Arlene Mccoy',
          'Devon Webb',
          'Tom Cook',
          'Tanya Fox',
          'Hellen Schmidt',
          'Caroline Schultz',
          'Mason Heaney',
          'Claudie Smitham',
          'Emil Schaefer',
        ]"
        model-value="Wade Cooper"
      />
      <ConversationView />
    </div>
    <Prompter />
  </div>
</template>
