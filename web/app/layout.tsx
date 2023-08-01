import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'space.repeat',
  description: 'a game changer for your flashcards game.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ClerkProvider>
        <body className={inter.className}>{children}</body>
      </ClerkProvider>
    </html>
  );
}
