import {
  Textarea,
  Text,
  Container,
  Space,
  Popover,
  Group,
  TextInput,
  Grid
} from '@mantine/core';
import React, { useEffect, useState } from 'react';
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
  const [ target, setTarget ] = useState('');
  const [ opened, setOpened ] = useState(false);
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

  const handleInputChange = (e: InputEvent, key: string) => {
    setInput({ ...input, [key]: e.currentTarget.value });
  };

  return (
    <Container size='md'>
      <Grid>
        <Group p={8}>
          <TextInput
            placeholder='name'
            label='name'
            value={input.name}
            onChange={(e) => handleInputChange(e, 'name')}
          />
          <TextInput
            placeholder='shortcut'
            label='shortcut'
            value={input.prefix}
            onChange={(e) => handleInputChange(e, 'prefix')}
          />
          <TextInput
            placeholder='description'
            label='description'
            value={input.description}
            onChange={(e) => handleInputChange(e, 'description')}
          />
        </Group>
        <Grid.Col span={12}>
          <Textarea
            placeholder='Paste code here'
            variant='filled'
            onChange={(e) => handleInputChange(e, 'body')}
            autosize
            minRows={10}
          />
        </Grid.Col>
      </Grid>

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
