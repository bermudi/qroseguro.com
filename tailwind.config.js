/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f9ff',
        },
      },
    },
  },
  plugins: [],
};
