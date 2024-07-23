import type { HttpClient } from "~/features/chatAssistant/repository/HttpClient";

export class AuthRepository {
  httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  public async login(payload: { password: string; email: string }) {
    return await this.httpClient.post("/auth/login", payload);
  }

  public async register() {}

  public async logout() {}
}
