import type { Tool } from "~/features/chatAssistant/models";
import {
  generalAssistantPrompt,
  translatorPrompt,
} from "~/features/chatAssistant/tools/prompts";

export const availableToolsCollection: Tool[] = [
  {
    name: "General assistant",
    id: "general-assistant",
    prompt: generalAssistantPrompt,
  },
  {
    name: "Translator",
    id: "translator",
    prompt: translatorPrompt,
  },
];
