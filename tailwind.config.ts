import type { Config } from 'tailwindcss';

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default {
  theme: {
    extend: {
      colors: {
        cherry: '#f9d6e3',
        forsythia: '#fff176',
        azalea: '#ff8da1',
      },
    },
  },
};