/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          600: '#2563eb',
        },
        gray: {
          50: '#f9fafb',
          600: '#4b5563',
          900: '#111827',
        },
      },
    },
  },
  plugins: [],
};
