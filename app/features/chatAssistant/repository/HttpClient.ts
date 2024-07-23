export interface HttpClient {
  get<T>(url: string, headers?: Record<string, string>): Promise<T>;
  post<T, U>(
    url: string,
    body?: U,
    headers?: Record<string, string>,
  ): Promise<T>;
  put<T, U>(
    url: string,
    body?: U,
    headers?: Record<string, string>,
  ): Promise<T>;
  delete<T>(url: string, headers?: Record<string, string>): Promise<T>;
}
