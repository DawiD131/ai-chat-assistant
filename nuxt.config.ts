// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@nuxtjs/supabase", "@vite-pwa/nuxt"],
  app: {
    head: {
      title: "Lua assistant",
      meta: [
        {
          name: "viewport",
          content:
            "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon.svg" }],
    },
  },
  components: [
    {
      path: "~/features/chatAssistant/components",
      pathPrefix: false,
    },
  ],
  srcDir: "app/",
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
    workbox: {
      globPatterns: ["**/*.{js,css,html,ico,png,svg}", "/"],
    },
    registerType: "autoUpdate",
  },
  runtimeConfig: {
    private: {
      openAiApiKey: process.env.OPEN_AI_API_KEY,
    },
  },
  supabase: {
    redirectOptions: {
      login: "/",
      callback: "/confirm",
      include: undefined,
      exclude: [],
      cookieRedirect: false,
    },
  },
});
