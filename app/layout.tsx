import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Storefront',
  description: 'A nifty store built with Next.js',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Navbar />
        <Container className='py-20'>{children}</Container>
      </body>
    </html>
  );
};

export default RootLayout;
