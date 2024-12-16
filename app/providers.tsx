'use client';

import React, { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/theme-provider';

//children is everything that this component will wrap (see layout.tsx)
type ProviderProps = {
  children: ReactNode;
};

//This hosts all of the providers that our application will need access to.
//We pass this in the root layout since it's UI-related
//So if I end up needing another provider for this app, e.g. a context provider,
//it will get added here.
const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
