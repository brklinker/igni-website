import './globals.css';
import type { Metadata } from 'next';
import { Inter, Righteous } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Meet Igni',
  description: 'Shop items, not brands',
  icons: {
    icon: '/igni-mascot.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
