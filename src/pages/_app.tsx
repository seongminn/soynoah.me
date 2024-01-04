import '~/styles/globals.css';

import type { AppProps } from 'next/app';

import Header from '~/components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <main className="container mx-auto h-[5000px] max-w-page">
        <Component {...pageProps} />
      </main>
    </>
  );
}
