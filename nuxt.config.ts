export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            siteUrl: process.env.NUXT_ENV_VERCEL_URL ? `https://app.hackwashu.com` : 'https://localhost:3000',
        }
    },
    modules: ['@nuxtjs/supabase', '@nuxtjs/color-mode', '@nuxtjs/tailwindcss'],
    css: ['@/assets/main.css'],
    supabase: {
        redirectOptions: {
            login: '/',
            callback: '/confirm',
            exclude: ['/'],
        }
    },
    colorMode: {
        preference: 'dracula',
        dataValue: 'theme'
    },
    ssr: false
})
