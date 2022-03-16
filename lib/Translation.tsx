import { Box, Textarea } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import React, { useState } from 'react';

type InputEvent = React.ChangeEvent<HTMLTextAreaElement>;
type Dict = {
  '%3C': string;
  '%3E': string;
  '%7B': string;
  '%7D': string;
  '%0A': string;
  '(%20){4}': string;
  '(%20){2}': string;
  '%20': string;
};

const DICT: Dict = {
  '%3C': '<',
  '%3E': '>',
  '%7B': '{',
  '%7D': '}',
  '%0A': '\n',
  '(%20){4}': '\t',
  '(%20){2}': '\t',
  '%20': ' '
};

const Translation = () => {
  const [ target, setTarget ] = useState('');
  const form = useForm({ initialValues: { code: '' } });

  const handleChange = (e: string) => {
    const translated = translate(e);
    setTarget(translated);
  };

  const translate = (input: string): string => {
    let res = encodeURI(input);

    for (const code in DICT) {
      const re = new RegExp(code, 'g');
      res = res.replaceAll(re, DICT[code as keyof Dict]);
    }

    return res;
  };

  return (
    <Box sx={{ minWidth: 500 }}>
      <form onSubmit={form.onSubmit((v) => console.log(v))}>
        <Textarea
          placeholder='Paste code here'
          variant='filled'
          onChange={(event) => handleChange(event.currentTarget.value)}
          autosize
          minRows={10}
        />
      </form>
      <Textarea
        placeholder='output'
        variant='default'
        autosize
        value={target}
        readOnly
      />
    </Box>
  );
};

export default Translation;
