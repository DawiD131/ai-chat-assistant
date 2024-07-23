import type { HttpClient } from "~/features/chatAssistant/repository/HttpClient";

interface EntryQueryPayload {
  content: string;
  role: "user";
  conversationId?: string;
}

export class EntryRepository {
  constructor(private readonly httpClient: HttpClient) {}

  public async entryQuery(
    payload: EntryQueryPayload,
  ): Promise<{ answer: string }> {
    return await this.httpClient.post("/entry", payload);
  }
}
