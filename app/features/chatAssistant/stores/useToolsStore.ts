import { defineStore } from "pinia";
import type { ToolsIds } from "~/features/chatAssistant/models";
import { availableToolsCollection } from "~/features/chatAssistant/tools";

export const useToolsStore = defineStore("useToolsStore", () => {
  const currentToolId = ref<ToolsIds>("general-assistant");

  const currentTool = computed(() => {
    const tool = availableToolsCollection.find(
      (it) => it.id === currentToolId.value,
    );
    if (!tool) throw new Error("Tool doesn't exists");
    return tool;
  });

  const setCurrentTool = (id: ToolsIds) => {
    currentToolId.value = id;
  };

  return {
    availableToolsCollection,
    currentToolId,
    currentTool,
    setCurrentTool,
  };
});
