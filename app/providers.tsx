'use client';

import { ThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';
import { ReactNode } from 'react';

interface ProvidersProps extends ThemeProviderProps {
  children: ReactNode;
}

export default function Providers({ children, ...props }: ProvidersProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
