// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxtjs/supabase"],
  runtimeConfig: {
    public: {
      openAiApiKey: process.env.OPEN_AI_API_KEY,
    },
  },
});