import type { HttpClient } from "~/features/chatAssistant/repository/HttpClient";

export class ConversationRepository {
  constructor(private readonly httpClient: HttpClient) {}

  async getAllConversations() {
    return await this.httpClient.get("/conversation");
  }

  async getConversationById(id: string) {
    return await this.httpClient.get(`/conversation/${id}`);
  }
}
