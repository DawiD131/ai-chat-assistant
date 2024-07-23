import axios from "axios";
import { AxiosHttpClient } from "~/features/chatAssistant/core/httpClient/AxiosHttpClient";

export const initHttpClient = () => {
  const httpClient = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 10000,
    headers: { "X-Custom-Header": "foobar" },
  });

  return new AxiosHttpClient(httpClient);
};
