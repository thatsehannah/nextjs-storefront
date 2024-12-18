import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Container from '@/components/global/Container';
import Providers from './providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next Storefront',
  description: 'A nifty store built with Next.js',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    // Wrapping the layout in Clerk Provder so the entire app can have access user data
    <ClerkProvider>
      <html
        lang='en'
        suppressHydrationWarning
      >
        <body className={inter.className}>
          {/* Contains multiple providers */}
          <Providers>
            <Navbar />
            <Container className='py-20'>{children}</Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
