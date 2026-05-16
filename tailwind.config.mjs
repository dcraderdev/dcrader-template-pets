/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'Georgia', 'serif'],
        oswald: ['Oswald', 'sans-serif'],
        fredoka: ['"Fredoka One"', 'cursive'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        inter: ['Inter', 'system-ui', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
