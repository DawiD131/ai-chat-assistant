import { useApiRepository } from "~/features/chatAssistant/composables/useApiRepository";
import type { UserSettings } from "~/features/chatAssistant/core/userSettings/models/UserSettings";

export const useUserSettingsStore = defineStore("useUserSettingsStore", () => {
  const userSettings = ref<UserSettings>({
    todoListWebhook: "",
  });

  const apiRepository = useApiRepository();

  const loadUserSettings = async () => {
    userSettings.value =
      await apiRepository.userSettingsRepository.getUserSettings();
  };

  const updateUserSettings = async (settings: any) => {
    return await apiRepository.userSettingsRepository.updateUserSettings(
      settings,
    );
  };

  return {
    userSettings,
    loadUserSettings,
    updateUserSettings,
  };
});
