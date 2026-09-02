import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes';
import type { AppProps } from 'next/app';
import '../styles/globals.css';
import { PropsWithChildren } from 'react';

import {
  BaseStyles,
  ThemeProvider as PrimerThemeProvider,
} from '@primer/react';

function AppThemeProvider({ children }: PropsWithChildren) {
  const { resolvedTheme } = useTheme();
  const colorMode = resolvedTheme === 'dark' ? 'night' : 'day';

  return (
    <PrimerThemeProvider colorMode={colorMode} preventSSRMismatch>
      <BaseStyles>{children}</BaseStyles>
    </PrimerThemeProvider>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemeProvider attribute="class">
      <AppThemeProvider>
        <Component {...pageProps} />
      </AppThemeProvider>
    </NextThemeProvider>
  );
}
