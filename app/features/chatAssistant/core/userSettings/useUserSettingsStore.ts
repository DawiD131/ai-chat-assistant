import { useApiRepository } from "~/features/chatAssistant/composables/useApiRepository";

export const useUserSettingsStore = defineStore("useUserSettingsStore", () => {
  const userSettings = ref<any>(null);

  const apiRepository = useApiRepository();

  const loadUserSettings = () => {};

  const updateUserSettings = async (settings: any) => {
    return await apiRepository.userSettingsRepository.updateUserSettings(
      settings,
    );
  };

  return {
    loadUserSettings,
    updateUserSettings,
  };
});
