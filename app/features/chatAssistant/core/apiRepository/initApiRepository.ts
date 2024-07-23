import { apiRepositoryInitializer } from "~/features/chatAssistant/repository/repositoryInitializer";
import { ApiRepositoryProvider } from "~/features/chatAssistant/core/apiRepository/ApiRepositoryProvider";
import { initHttpClient } from "~/features/chatAssistant/core/httpClient/initHttpClient";

export const initApiRepository = () => {
  const httpClient = initHttpClient();

  const repository = apiRepositoryInitializer(httpClient);

  ApiRepositoryProvider.provide(repository);
};
