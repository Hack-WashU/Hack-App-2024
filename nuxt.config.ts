export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_ENV_VERCEL_URL
        ? `https://app.hackwashu.com`
        : "https://localhost:3000",
    },
  },
  modules: [
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],
  css: ["@/assets/main.css"],
  colorMode: {
    preference: "dracula",
    dataValue: "theme",
  },
  ssr: false,
});
