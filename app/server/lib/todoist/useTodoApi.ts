import { useTodoClient } from "~/server/lib/todoist/useTodoClient";

export const useTodoApi = () => {
  const client = useTodoClient();

  const addProject = () => {};

  const searchProject = () => {};

  const getProjects = async () => {
    const resp = await client.getProjects();

    return resp;
  };

  return {
    addProject,
    searchProject,
    getProjects,
  };
};
