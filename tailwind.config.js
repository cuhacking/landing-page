/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/*.{html,js,tsx}',
    './src/components/*.{html,js,tsx}',
    './src/pages/homePage/**/*.{html,js,tsx}',
  ],
  theme: {
    fontFamily: {
      'display': ['Lexend Deca',],
      'sans': ["Poppins",],
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          
          "primary": "#065f46",
          "secondary": "#F05FAE",
          "secondary-content": "#EFF7FF",
          "accent": "#f9a8d4",
          "neutral": "#10b981",
          
          "base-content": "#2A2547",
          "base-100": "#C5DFF8",

          "info": "#22d3ee",
          "success": "#d9f99d",
          "warning": "#fed7aa",
          "error": "#fb7185",
        },
      },
      {
        dark: {
          "primary": "#065f46",
          "secondary": "#F05FAE",
          "secondary-content": "#EFF7FF",
          "accent": "#f9a8d4",
          "neutral": "#10b981",
          "base-100": "#2A2547",
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

