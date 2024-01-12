import '~/styles/globals.css';

import { GeistMono } from 'geist/font/mono';

import Header from '~/components/site-header';

import Providers from './providers';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={GeistMono.variable} suppressHydrationWarning>
      <body>
        <Providers storageKey="seongmin-theme" attribute="class">
          <Header />
          <main className="container mx-auto max-w-content">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
