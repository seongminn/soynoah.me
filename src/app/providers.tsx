'use client';

import { ReactNode } from 'react';
import { ThemeProvider, ThemeProviderProps } from 'next-themes';

interface ProvidersProps extends ThemeProviderProps {
  children: ReactNode;
}

export default function Providers({ children, ...props }: ProvidersProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}
