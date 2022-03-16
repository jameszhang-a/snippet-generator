import { Textarea, Text, Container, Space, Popover } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import React, { useState } from 'react';
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
  const [ opened, setOpened ] = useState(false);
  const codeForm = useForm({ initialValues: { code: '' } });

  const handleChange = (e: string) => {
    const translated = translate(e);
    setTarget(translated);
  };

  const translate = (input: string): string => {
    let res = encodeURI(input);

    //TODO:  replace with real data
    const name = 'james';
    const trigger = 'ja';
    const desc = 'some shortcut';

    // loops through DICT and replace all matching chars
    for (const code in DICT) {
      const re = new RegExp(code, 'g');
      res = res.replaceAll(re, DICT[code as keyof Dict]);
    }

    const output = {
      name: {
        prefix: trigger,
        body: res,
        description: desc
      }
    };

    // transform object to JSON
    let outString = JSON.stringify(output, undefined, 4);

    // remove extra brackets surround the string and add a comma
    outString = outString.slice(1, -1).trim() + ',';
    console.log(outString);

    return outString;
  };

  const copyTextToClipboard = async (text: string) => {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      // only happens on a dinosaur browser
      return document.execCommand('copy', true, text);
    }
  };

  const copyResult = async () => {
    if (target) {
      await copyTextToClipboard(target);
      setOpened(true);
      setTimeout(() => {
        setOpened(false);
      }, 800);
    }
  };

  return (
    <Container size='md'>
      <form onSubmit={codeForm.onSubmit((v) => console.log(v))}>
        <Textarea
          placeholder='Paste code here'
          variant='filled'
          onChange={(event) => handleChange(event.currentTarget.value)}
          autosize
          minRows={10}
        />
      </form>

      <Space h='md' />

      <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        target={<OutputArea target={target} onClick={copyResult} />}
        position='bottom'
        placement='center'
        withArrow
        trapFocus={false}
        closeOnEscape={false}
        transition='scale-y'
        radius='lg'
        spacing='xs'
      >
        <Text color='green'>Copied to clipboard!</Text>
      </Popover>
    </Container>
  );
};

export default Translation;
