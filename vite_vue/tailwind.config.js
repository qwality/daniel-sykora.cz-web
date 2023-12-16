/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  // safelist: [
  //   'bg-success',
  //   'bg-accent',
  //   'bg-info',
  //   'bg-warning',
  //   'bg-error',
  // ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light", "dark", "cupcake", "dracula", "coffee"],
  },
  plugins: [require("daisyui")],
}

