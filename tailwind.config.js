/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#007BFF', // Electric Blue
        secondary: '#39FF14', // Neon Green
        success: '#16A34A', // Green
        warning: '#F59E0B', // Yellow
        error: '#EF4444', // Red
        info: '#0EA5E9', // Light blue
        neutral: {
          light: '#EEEEEE',  // Light 
          DEFAULT: '#6B7280', // Mid gray for text
          dark: '#151515',   // Dark 
        },     
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter font family
      },
    },
  },
  plugins: [],
}

