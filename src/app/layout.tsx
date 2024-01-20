import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { commonMetadata } from '@/config/metadata';
import { NavBar } from '@/components/navBar';

const notoSansJP = Noto_Sans_JP({ subsets: ['latin'], weight: ['400'] });

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
      <body className={notoSansJP.className}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
