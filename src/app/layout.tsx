import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'space repeat',
  description: 'A game changing flashcard experience',
  authors: [{ name: 'Surya Ashish', url: 'https://bento.me/suryaashish' }],
  keywords: [
    'flashcards',
    'learning',
    'education',
    'study',
    'nextjs',
    'supabase',
    'tailwindcss',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={twMerge(inter.className, 'min-h-screen')}>
        {children}
      </body>
    </html>
  );
}
