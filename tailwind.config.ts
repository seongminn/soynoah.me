import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', 'sans'],
      serif: ['var(--font-serif)', 'sans-serif'],
      mono: ['var(--font-geist-mono)', 'ui-monospace'],
    },
    screens: {
      lg: { max: '1074px' },
      md: { max: '768px' },
      sm: { max: '640px' },
    },
    colors: {
      transparent: 'transparent',
      gray: {
        50: 'var(--gray-50)',
        75: 'var(--gray-75)',
        100: 'var(--gray-100)',
        150: 'var(--gray-150)',
        200: 'var(--gray-200)',
        250: 'var(--gray-250)',
        300: 'var(--gray-300)',
        400: 'var(--gray-400)',
        500: 'var(--gray-500)',
        600: 'var(--gray-600)',
        700: 'var(--gray-700)',
        800: 'var(--gray-800)',
        900: 'var(--gray-900)',
      },
      selection: 'var(--selection)',
      border: 'var(--border)',
    },
    extend: {
      textColor: {
        heading: 'var(--heading)',
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
      },
    },
  },
  plugins: [],
};
export default config;
