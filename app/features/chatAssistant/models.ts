export type ToolsIds = "general-assistant" | "translator";

export interface Tool {
  name: string;
  id: ToolsIds;
  prompt: string;
}
