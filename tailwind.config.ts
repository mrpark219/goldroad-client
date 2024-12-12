import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#F6843E',
        secondary: '#FFF3EC',
        black: '#111111',
        white: '#EEEEEE',
        gray: '#F8F9FB',
      },
    },
  },
  plugins: [],
};
export default config;
