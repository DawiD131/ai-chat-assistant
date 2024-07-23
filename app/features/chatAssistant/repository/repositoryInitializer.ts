import type { HttpClient } from "~/features/chatAssistant/repository/HttpClient";
import { AuthRepository } from "~/features/chatAssistant/repository/AuthRepository";
import { EntryRepository } from "~/features/chatAssistant/repository/EntryRepository";

export const apiRepositoryInitializer = (httpClient: HttpClient) => {
  const authRepository = new AuthRepository(httpClient);
  const entryRepository = new EntryRepository(httpClient);

  return {
    authRepository,
    entryRepository,
  };
};

export type ApiRepository = ReturnType<typeof apiRepositoryInitializer>;
