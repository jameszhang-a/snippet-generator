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
  ogDescription?: string;
};

const SEO = ({
  title,
  keywords,
  description,
  ogTitle,
  ogType,
  ogUrl,
  ogImage,
  ogDescription
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
      <meta property='og:description' content={ogDescription} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />
      <title>{title}</title>
    </Head>
  );
};

SEO.defaultProps = {
  title: 'VS Code Snippet Builder',
  keywords:
    'vscode, VS Code, snippet builder, snippet generator, snippet creator, snippets',
  description: 'minimalistic and easy to use snippet builder for vscode',
  ogTitle: 'VS Code Snippet Builder',
  ogDescription: 'minimalistic and easy to use snippet builder for vscode',
  ogImage:
    'https://og-image.vercel.app/Snippet%20Builder.jpeg?theme=dark&md=1&fontSize=150px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fhyper-bw-logo.svg',
  ogType: 'website',
  ogUrl: 'https://snippet-builder.vercel.app/'
};

export default SEO;
