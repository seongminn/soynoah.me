'use client';

import { useTheme } from 'next-themes';

import { Icons } from './icons';
import Button from './ui/button';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        className="h-6 w-6 p-1"
        title="Toggles light & dark"
        aria-label="auto"
        aria-live="polite"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        <Icons.sun
          className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
          aria-hidden="true"
        />
        <Icons.moon
          className="absolute box-border h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
          aria-hidden="true"
        />
      </Button>
    </div>
  );
}
