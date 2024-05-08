import type { Metadata } from 'next';
import '@/styles/globals.css';
import Link from 'next/link';
import Logo from '@/components/Logo';
import { Flowbite } from 'flowbite-react';
import customTheme from '@/styles/theme';

export const metadata: Metadata = {
  title: 'Socotra App',
  description: 'Socotra App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flowbite theme={{ theme: customTheme }}>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          <header className="bg-nav-background text-white py-2.5">
            <nav className="container mx-auto flex justify-between">
              <Link href="/" className="text-white">
                <Logo />
              </Link>
            </nav>
          </header>
          <main className=" container mx-auto py-4">{children}</main>
        </body>
      </html>
    </Flowbite>
  );
}
