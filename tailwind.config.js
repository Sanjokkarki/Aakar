/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'axiforma': ['Axiforma', 'sans-serif'],
      },
      colors: {
        primary: "#19B14B",
        secondary: "#052E14"
        
      },
      fontSize: {
        '40px': '40px',
        '36px': '36px',
        '32px': '32px',
        '28px': '28px',
        '24px': '24px',
        '20px': '20px',
        '16px': '16px',
        '14px': '14px',
      },
      lineHeight: {
        '48px': '48px',
        '44px': '44px',
        '40px': '40px',
        '36px': '36px',
        '32px': '32px',
        '28px': '28px',
        '24px': '24px',
        '20px': '20px',
      },
      
    }
  },
  plugins: [],
}