// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxtjs/supabase", "@vite-pwa/nuxt"],
  app: {
    head: {
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
    },
  },
  pwa: {
    manifest: {
      name: "Lua",
      lang: "en",
      description: "Lua - AI chat",
      icons: [
        {
          src: "icon.svg",
          sizes: "any",
          purpose: "any",
        },
      ],
    },
    devOptions: {
      enabled: true,
    },
    workbox: {
      navigateFallback: "/",
    },
  },
  runtimeConfig: {
    public: {
      openAiApiKey: process.env.OPEN_AI_API_KEY,
    },
  },
});
