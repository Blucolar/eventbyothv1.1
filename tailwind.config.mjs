/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkgray: '#2C2C2C',
        grey: '#808080',
        primary: '#F0743E',
        lightgray: "#f7f7f7",
        neutral: '#5D5D5D'
      },
    },
    backgroundImage: {
      'homeBg': "url('/assets/img/try1.jpg')",
      'ticketImg': "url('/assets/img/ticket-img.png')"
    },
    fontFamily: {
      // sans: ["Poppins", 'sans'],
      // serif: ["Playfair Display", 'serif'],
      // desyrel: ['Desyrel', 'cursive']
    },
  },

  plugins: [],
};

