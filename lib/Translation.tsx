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
  '%0A': '\\n',
  '(%20){4}': '\\t',
  '(%20){2}': '\\t',
  '%20': ' '
};

const Translation = () => {
  const [ target, setTarget ] = useState('');
  const [ opened, setOpened ] = useState(false);
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
      <form onSubmit={form.onSubmit((v) => console.log(v))}>
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
        transition='pop-top-left'
        radius='lg'
        spacing='xs'
      >
        <Text color='blue'>Copied!</Text>
      </Popover>
    </Container>
  );
};

export default Translation;
