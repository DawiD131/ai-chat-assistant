// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt", "@vite-pwa/nuxt"],
  ssr: false,
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
    {
      path: "~/features/chatAssistant/views",
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
    public: {
      apiUrl: process.env.API_URL,
    },
  },
});
