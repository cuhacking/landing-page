/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{html,js,tsx}',
    './src/components/*.{html,js,tsx}',
    './src/components/Application/*.{html,js,tsx}',
    '/src/components/NavBar.tsx',
  ],
  theme: {
    fontFamily: {
      'display': ['Lexend Deca',],
      'body': ["Poppins",],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#065f46",
          "secondary": "#4ade80",
          "accent": "#f9a8d4",
          "neutral": "#10b981",
          "base-100": "#f5f5f4",
          "info": "#22d3ee",
          "success": "#d9f99d",
          "warning": "#fed7aa",
          "error": "#fb7185",
        },
      },
      {
        dark: {
          "primary": "#065f46",
          "secondary": "#4ade80",
          "accent": "#f9a8d4",
          "neutral": "#10b981",
          "base-100": "#ff0000",
          "info": "#22d3ee",
          "success": "#d9f99d",
          "warning": "#fed7aa",
          "error": "#fb7185",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

