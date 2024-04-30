/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cookie: ['Cookie', 'cursive'],
        karla: ['Karla', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
        pressStart2P: ['Press Start 2P', 'cursive'],
      },
    },
  },
  plugins: [],
}

