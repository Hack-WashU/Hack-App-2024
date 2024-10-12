export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      siteUrl: process.env.VERCEL_ENV === "production"
        ? "https://app.hackwashu.com"
        : "http://localhost:3000",  // Use http for local dev
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
