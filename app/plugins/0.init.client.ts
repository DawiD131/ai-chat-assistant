import { initApiRepository } from "~/features/chatAssistant/core/apiRepository/initApiRepository";

export default defineNuxtPlugin({
  name: "init",
  setup: () => {
    initApiRepository();
  },
});
