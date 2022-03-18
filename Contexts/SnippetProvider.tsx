import React, { createContext, useState } from 'react';

type Props = { children: any };
type Context = {
  snippet: {
    name: string;
    prefix: string;
    body: string;
    description: string;
  };
  setSnippet: Function;
};

const context: React.Context<any> = createContext(null);

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
