import { useApiRepository } from "~/features/chatAssistant/composables/useApiRepository";

export const useAuthStore = defineStore("useAuthStore", () => {
  const apiRepository = useApiRepository();

  const login = async (payload: { email: string; password: string }) => {
    return await apiRepository.authRepository.login(payload);
  };

  const logout = async () => {};

  const register = async () => {};

  return {
    login,
    logout,
    register,
  };
});
