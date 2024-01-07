/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}"],
  theme: {
    backgroundImage: {
      'CakeBack': "url('/images/CakeBack.jpg')",
      'AlterCake': "url('/images/CakeBackNew.jpg')",
      'TeaBack': "url('/images/teaBack.jpg')",
      'CaterBack': "url('/images/caterBack.jpg')",
    },


    boxShadow: {
      xl: '0 4px 160px rgba(0, 0, 0, 0.4)',
    },

    fontFamily: {
      sans: ['Lucida Handwriting', 'sans-serif'],
      serif: ['Times New Roman', 'serif'],
    },

    extend: {
      screens: {
        'dark': { 'raw': '(prefers-color-scheme: dark)' },
      },
      colors: {

        darkMode: {
          background: '#121212',
          text: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};
