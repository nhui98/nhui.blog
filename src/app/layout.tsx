import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { cn } from '@/lib/utils';

const font = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Home | Blog Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn('bg-neutral-50 text-neutral-950', font.className)}>
        {children}
      </body>
    </html>
  );
}
