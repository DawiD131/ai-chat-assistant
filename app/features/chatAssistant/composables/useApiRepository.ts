import { ApiRepositoryProvider } from "~/features/chatAssistant/core/apiRepository/ApiRepositoryProvider";
import type { ApiRepository } from "~/features/chatAssistant/repository/repositoryInitializer";

export const useApiRepository = (): ApiRepository =>
  ApiRepositoryProvider.inject();
