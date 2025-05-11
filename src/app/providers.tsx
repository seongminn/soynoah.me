'use client';

import type { ReactNode } from 'react';
import type { ThemeProviderProps } from 'next-themes';
import { ThemeProvider } from 'next-themes';

interface ProvidersProps extends ThemeProviderProps {
  children: ReactNode;
}

export default function Providers({ children, ...props }: ProvidersProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
