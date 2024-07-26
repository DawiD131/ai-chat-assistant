import type { HttpClient } from "~/features/chatAssistant/repository/HttpClient";
import { AuthRepository } from "~/features/chatAssistant/repository/AuthRepository";
import { EntryRepository } from "~/features/chatAssistant/repository/EntryRepository";
import { ConversationRepository } from "~/features/chatAssistant/repository/ConversationRepository";
import { UserSettingsRepository } from "~/features/chatAssistant/repository/UserSettingsRepository";

export const apiRepositoryInitializer = (httpClient: HttpClient) => {
  const authRepository = new AuthRepository(httpClient);
  const entryRepository = new EntryRepository(httpClient);
  const conversationRepository = new ConversationRepository(httpClient);
  const userSettingsRepository = new UserSettingsRepository(httpClient);

  return {
    authRepository,
    entryRepository,
    conversationRepository,
    userSettingsRepository,
  };
};

export type ApiRepository = ReturnType<typeof apiRepositoryInitializer>;
