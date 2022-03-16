import Head from 'next/head';
import React from 'react';

type Meta = {
  title?: string;
  keywords?: string;
  description?: string;
  ogTitle?: string;
  ogType?: string;
  ogUrl?: string;
  ogImage?: string;
};

const SEO = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage
}: Meta) => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta property='og:title' content={ogTitle} />
      <meta property='og:type' content={ogType} />
      <meta property='og:url' content={ogUrl} />
      <meta property='og:image' content={ogImage} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

SEO.defaultProps = {
  title: 'VS Code Snippet Builder',
  keywords:
    'vscode, VS Code, snippet builder, snippet generator, snippet creator',
  description: 'Simple app to generate a VS Code snipped from any code',
  ogTitle: 'VS Code Snippet Builder'
};

export default SEO;
