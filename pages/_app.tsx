import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import React from 'react';
import '../styles/globals.css';
import SEO from '../lib/SEO';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/analytics/';
import Script from 'next/script';

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  const router = useRouter();
  useEffect(
    () => {
      const handleRouteChange = (url: any) => {
        gtag.pageview(url);
      };
      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    },
    [ router.events ]
  );

  return (
    <React.Fragment>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      <SEO />

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        defaultProps={{
          Container: {
            sizes: {
              xs: 540,
              sm: 720,
              md: 960,
              lg: 1140,
              xl: 1320
            }
          }
        }}
        theme={{ colorScheme: 'dark' }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </React.Fragment>
  );
};

export default App;
