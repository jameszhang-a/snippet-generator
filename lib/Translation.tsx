import { Center } from '@mantine/core';
import { useClipboard } from '@mantine/hooks';
import React, { useEffect, useState } from 'react';
import InputArea from './InputArea';
import CopyArea from './CopyArea';
import OutputArea from './OutputArea';

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

type InputEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>;

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
  const clipboard = useClipboard({ timeout: 800 });
  const [ target, setTarget ] = useState('');
  const [ input, setInput ] = useState({
    name: '',
    prefix: '',
    body: '',
    description: ''
  });

  useEffect(
    () => {
      const translate = (): string => {
        const { name, prefix, body, description } = input;
        let res = encodeURI(body);

        // Run replace with all regex rules from DICT
        for (const code in DICT) {
          const re = new RegExp(code, 'g');
          res = res.replaceAll(re, DICT[code as keyof Dict]);
        }

        const output = {
          [name]: {
            prefix,
            body: res,
            description
          }
        };

        // transform object to JSON
        let outString = JSON.stringify(output, undefined, 4);

        // remove extra brackets surround the string and add a comma
        outString = outString.slice(1, -1).trim() + ',';

        return outString;
      };

      setTarget(translate());
    },
    [ input ]
  );

  const copyResult = async () => {
    if (target) clipboard.copy(target);
  };

  const handleInputChange = (e: InputEvent, key: string) => {
    setInput({ ...input, [key]: e.currentTarget.value });
  };

  return (
    <Center style={{ flexDirection: 'column' }}>
      <InputArea input={input} handleChange={handleInputChange} />
      <OutputArea
        clipboard={clipboard}
        target={target}
        copyResult={copyResult}
      />
    </Center>
  );
};

export default Translation;
