import '~/styles/globals.css';

import { GeistMono } from 'geist/font/mono';
import type { Metadata } from 'next';
import localFont from 'next/font/local';

import { Footer } from '~/components/site-footer';
import GoogleAnalytics from '~/libs/google-analytics';
import { cn } from '~/libs/utils';
import { site } from '~/site';

import Providers from './providers';

const font = localFont({
  src: '../../public/fonts/Eulyoo1945-Regular.woff2',
  display: 'swap',
  variable: '--font-serif',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={cn(font.variable, GeistMono.variable)} suppressHydrationWarning>
      <head>{process.env.NODE_ENV === 'production' && <GoogleAnalytics />}</head>
      <body>
        <Providers storageKey="soynoah-theme" attribute="class">
          <div className="relative flex min-h-dvh flex-col">
            <div className="blur-layer" />

            <main className="container relative mx-auto min-h-[calc(100vh-7rem-20px)] max-w-content">
              {children}
            </main>

            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s ⋅ ${site.title}`,
  },
  metadataBase: new URL(site.url),
  description: site.description,
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Frontend'],
  authors: [{ name: site.author.name }],
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: site.title,
    images: [],
  },
  alternates: { canonical: site.url },
  icons: {
    icon: {
      url: '/favicon.ico',
      rel: 'icon',
      type: 'image/x-icon',
      sizes: 'any',
    },
    shortcut: {
      url: '/favicon-16x16.png',
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
    },
    apple: {
      url: '/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      type: 'image/png',
      sizes: '32x32',
    },
  },
  manifest: '/site.webmanifest',
};
