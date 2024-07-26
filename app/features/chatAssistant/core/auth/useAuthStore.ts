import { useApiRepository } from "~/features/chatAssistant/composables/useApiRepository";
import type { RegisterPayload } from "~/features/chatAssistant/repository/AuthRepository";
import axios from "axios";

export const useAuthStore = defineStore("useAuthStore", () => {
  const apiRepository = useApiRepository();
  const isAuthenticated = ref(false);
  const router = useRouter();

  const login = async (payload: { email: string; password: string }) => {
    try {
      await apiRepository.authRepository.login(payload);
      await router.push("/chat-assistant");
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    return await apiRepository.authRepository.logout();
  };

  const register = async (payload: RegisterPayload) => {
    return await apiRepository.authRepository.register(payload);
  };

  const refreshToken = async () => {
    try {
      await apiRepository.authRepository.refreshToken();
      isAuthenticated.value = true;
    } catch (e) {
      if (!axios.isAxiosError(e)) {
        console.error(e);
        return;
      }

      if (e.response?.status === 401) {
        isAuthenticated.value = false;
      }
    }
  };

  return {
    login,
    logout,
    register,
    refreshToken,
    isAuthenticated,
  };
});
