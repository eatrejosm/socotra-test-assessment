import type { Config } from 'tailwindcss';
const flowbite = require('flowbite-react/tailwind');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'nav-background': 'linear-gradient(104.5deg, #112C4D 0%, #406E8F 100%)',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        cyan: {
          '50': '#ECFEFF',
          '100': '#CFFAFE',
          '200': '#A5F3FC',
          '300': '#67E8F9',
          '400': '#22D3EE',
          '500': '#06B6D4',
          '600': '#0891B2',
          '700': '#406E8F',
          '800': '#155E75',
          '900': '#164E63',
          'custom-light': '#00FFFF', // Custom light cyan
          'custom-dark': '#008B8B', // Custom dark cyan
        },
      },
      fontSize: {
        'button-lg': ['1.125rem', '1.5rem'], // 18px with a 1.5rem line-height
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
