import type { HttpClient } from "~/features/chatAssistant/repository/HttpClient";
import { AuthRepository } from "~/features/chatAssistant/repository/AuthRepository";

export const apiRepositoryInitializer = (httpClient: HttpClient) => {
  const authRepository = new AuthRepository(httpClient);

  return {
    authRepository,
  };
};

export type ApiRepository = ReturnType<typeof apiRepositoryInitializer>;
