/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "dracula", "coffee", "nord", "wireframe", "corporate"],
  },
  plugins: [require("daisyui")],
}

