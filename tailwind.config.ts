import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: {
            DEFAULT: '#67ac99',
            900: '#67ac99',
            800: '#67AC98',
            400: '#81d7be',
          },
        },
        secondary: {
          DEFAULT: '#bba74c',
        },
        darkBlur: '#324458',
        darkGray: '#484848',
        lightWhite: '#f8f8f8',
        lightGray: '#f2f2f2',
        gray_1: '#666666',
        footerGray: '#ededed',
      },
      fontFamily: {
        iranSans: ['var(--font-iranSans)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--gradient-stops))',
      },
    },
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1100px',
        '2xl': '1100px',
      },
    },
  },
  plugins: [],
};
export default config;
