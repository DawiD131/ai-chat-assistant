import type { HttpClient } from "~/features/chatAssistant/repository/HttpClient";

interface UserSettings {
  openAiApiKey: string;
}

export class UserSettingsRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async updateUserSettings(data: Partial<UserSettings>): Promise<void> {
    await this.httpClient.put("/user-settings", data);
  }
}
