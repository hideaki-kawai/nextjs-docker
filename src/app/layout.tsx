import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { commonMetadata } from '@/config/metadata';
import { NavBar } from '@/components/nav-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  ...commonMetadata,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
