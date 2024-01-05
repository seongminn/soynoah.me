import '~/styles/globals.css';

import { GeistMono } from 'geist/font/mono';

import Header from '~/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistMono.variable}>
      <body>
        <Header />
        <main className="container mx-auto h-[5000px] max-w-content">
          {children}
        </main>
      </body>
    </html>
  );
}
