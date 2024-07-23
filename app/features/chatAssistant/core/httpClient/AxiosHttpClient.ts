import type { HttpClient } from "~/features/chatAssistant/repository/HttpClient";
import type { AxiosInstance, AxiosResponse } from "axios";

export class AxiosHttpClient implements HttpClient {
  constructor(private readonly axios: AxiosInstance) {}

  async get<T>(url: string, headers: Record<string, string> = {}): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.get(url, {
      headers,
    });
    return this.handleResponse(response);
  }

  async post<T, U>(
    url: string,
    body: U,
    headers: Record<string, string> = {},
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.post(url, body, {
      headers,
    });
    return this.handleResponse(response);
  }

  async put<T, U>(
    url: string,
    body: U,
    headers: Record<string, string> = {},
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.put(url, body, {
      headers,
    });
    return this.handleResponse(response);
  }

  async delete<T>(
    url: string,
    headers: Record<string, string> = {},
  ): Promise<T> {
    const response: AxiosResponse<T> = await this.axios.delete(url, {
      headers,
    });
    return this.handleResponse(response);
  }

  private handleResponse<T>(response: AxiosResponse<T>): T {
    if (response.status < 200 || response.status >= 300) {
      throw new Error(
        `HTTP error! Status: ${response.status}, Message: ${response.statusText}`,
      );
    }
    return response.data;
  }
}
