import { MediaQuery, Textarea } from '@mantine/core';
import React, { useContext, useState } from 'react';
import SnippetProvider, { Snippet } from '../Contexts/SnippetProvider';
import { AreaInputEvent } from './Translation';

type Props = {
  target: string;
  setTarget: Function;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const CopyArea = ({ target, setTarget, handleChange }: Props) => {
  const { snippet, setSnippet } = useContext(SnippetProvider.context);
  const [ outputText, setOutputText ] = useState('');

  const handleOutputChange = (e: AreaInputEvent) => {
    const value = e.target.value;

    // Turn target into JS object
    const raw = JSON.parse(value);
    // Grab the 1 and only key as the name
    const name = Object.keys(raw)[0];
    // Finally construct the Snippet object
    const parsed: Snippet = { name, ...raw[name] };

    setSnippet(parsed);
    setOutputText(value);
  };

  return (
    <MediaQuery largerThan='md' styles={{ width: '50vw' }}>
      <Textarea
        placeholder='output'
        variant='default'
        sx={{ width: '80vw' }}
        autosize
        value={outputText}
        onChange={(e) => handleOutputChange(e)}
        minRows={5}
      />
    </MediaQuery>
  );
};

export default CopyArea;
