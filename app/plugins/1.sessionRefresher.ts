import { useAuthStore } from "~/features/chatAssistant/core/auth/useAuthStore";

export default defineNuxtPlugin({
  name: "sessionRefresher",
  setup: async () => {
    const authStore = useAuthStore();

    await authStore.refreshToken();
  },
});
