import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DB7307',
        secondary: '#111827',
        accent: '#919695',
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#DB7307",
          secondary: "#111827",
          accent: "#919695",
        },
      },
    ],
  },
};
