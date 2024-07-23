import type { HttpClient } from "~/features/chatAssistant/repository/HttpClient";

export interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export class AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}

  public async login(payload: { password: string; email: string }) {
    return await this.httpClient.post("/auth/login", payload);
  }

  public async register(payload: RegisterPayload) {
    return await this.httpClient.post("/auth/register", payload);
  }

  public async logout() {
    return await this.httpClient.get("/auth/logout");
  }

  public async refreshToken() {
    return await this.httpClient.post("/auth/refresh");
  }
}
