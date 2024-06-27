import tailwindcssTypography from '@tailwindcss/typography';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-hydration',
    '@nuxtjs/html-validator',
    '@nuxtjs/tailwindcss',
  ],
  tailwindcss: {
    config: {
      plugins: [tailwindcssTypography],
    },
  },
});
