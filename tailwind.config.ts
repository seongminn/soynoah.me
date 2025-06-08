import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', 'sans'],
      serif: ['var(--font-serif)', 'sans-serif'],
      mono: ['var(--font-mono), var(--font-geist-mono)', 'ui-monospace'],
    },
    screens: {
      xl: { max: '1280px' },
      lg: { max: '1074px' },
      md: { max: '700px' },
      sm: { max: '640px' },
    },
    colors: {
      transparent: 'transparent',
      gray: {
        50: 'var(--colors-gray-50)',
        100: 'var(--colors-gray-100)',
        150: 'var(--colors-gray-150)',
        200: 'var(--colors-gray-200)',
        250: 'var(--colors-gray-250)',
        300: 'var(--colors-gray-300)',
        400: 'var(--colors-gray-400)',
        500: 'var(--colors-gray-500)',
        600: 'var(--colors-gray-600)',
        700: 'var(--colors-gray-700)',
        800: 'var(--colors-gray-800)',
        900: 'var(--colors-gray-900)',
      },
      selection: 'var(--selection)',
      border: 'var(--border)',
    },
    extend: {
      textColor: {
        body: 'var(--text-body)',
        second: 'var(--text-second)',
        disabled: 'var(--text-disabled)',
      },
      backgroundColor: {
        page: 'var(--page-background)',
      },
      maxWidth: {
        page: 'var(--page-width)',
        content: 'var(--content-width)',
      },
      width: {
        page: 'var(--page-width)',
        content: 'var(--content-width)',
      },
      spacing: {
        page: 'var(--page-top)',
        content: 'var(--content-width)',
      },
    },
  },
  plugins: [],
};
export default config;
