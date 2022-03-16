import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import React from 'react';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <React.Fragment>
      <Head>
        <title>Page</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: 'dark' }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </React.Fragment>
  );
};

export default App;
