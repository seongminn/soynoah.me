import '~/styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className="header mx-auto max-w-page">header</header>
      <main className="container mx-auto max-w-page">
        <Component {...pageProps} />
      </main>
    </>
  );
}
