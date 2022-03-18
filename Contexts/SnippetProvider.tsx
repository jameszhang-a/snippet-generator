import React, { createContext, useState } from 'react';

type Props = { children: any };

export type Snippet = {
  name: string;
  prefix: string;
  body: string;
  description: string;
};

export type GlobalSnippet = {
  snippet: Snippet;
  setSnippet: (s: any) => void;
};

const context = createContext<GlobalSnippet>({
  snippet: {
    name: '',
    prefix: '',
    body: '',
    description: ''
  },
  setSnippet: () => {}
});

const SnippetProvider = ({ children }: Props) => {
  const [ snippet, setSnippet ] = useState({
    name: '',
    prefix: '',
    body: '',
    description: ''
  });

  return (
    <context.Provider value={{ snippet, setSnippet }}>
      {children}
    </context.Provider>
  );
};

SnippetProvider.context = context;

export default SnippetProvider;
