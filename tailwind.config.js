import daisyui from 'daisyui';
import flowbite from 'flowbite/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
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
 plugins: [daisyui, flowbite],
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
