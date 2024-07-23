import axios from "axios";
import { AxiosHttpClient } from "~/features/chatAssistant/core/httpClient/AxiosHttpClient";

export const initHttpClient = () => {
  const config = useRuntimeConfig();

  if (typeof config.public.apiUrl !== "string") throw new Error("");

  const httpClient = axios.create({
    baseURL: config.public?.apiUrl,
    timeout: 50000,
    headers: { "X-Custom-Header": "foobar" },
    withCredentials: true,
  });

  return new AxiosHttpClient(httpClient);
};
