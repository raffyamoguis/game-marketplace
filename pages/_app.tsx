import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Game Account Marketplace</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          fontFamily: 'Varela Round, sans-serif',
          colorScheme: 'light',
          headings: { fontFamily: 'Varela Round, sans-serif' },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
