import '~/styles/globals.css';

import Header from '~/components/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container mx-auto h-[5000px] max-w-page">
          {children}
        </main>
      </body>
    </html>
  );
}
