'use client';

import { useTheme } from 'next-themes';

import { Icons } from './icons';
import { IconButton } from './ui/icon-button';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      label="Toggle theme"
      aria-live="polite"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun
        className="h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
        aria-hidden="true"
      />
      <Icons.moon
        className="absolute box-border h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0"
        aria-hidden="true"
      />
    </IconButton>
  );
}
