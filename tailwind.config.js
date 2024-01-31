/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brightYellow: 'hsl(71, 73%, 54%)',
        cyan: 'hsl(179, 62%, 43%)',
        lightGray: 'hsl(204, 43%, 93%)',
        grayishBlue: 'hsl(218, 22%, 67%)',
      },
      fontFamily: {
        karla: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

