import { TodoistApi } from "@doist/todoist-api-typescript";

export const useTodoClient = () => {
  const config = useRuntimeConfig();

  return new TodoistApi(config.private.todoistApiKey);
};
