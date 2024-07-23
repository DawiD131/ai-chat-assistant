import { initApiRepository } from "~/features/chatAssistant/core/apiRepository/initApiRepository";

export default defineNuxtPlugin((nuxtApp) => {
  initApiRepository();
});
