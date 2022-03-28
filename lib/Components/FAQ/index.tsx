import React from 'react';
import {
  Accordion,
  Anchor,
  Code,
  MediaQuery,
  Space,
  Text,
  List,
  Divider,
  Kbd
} from '@mantine/core';
import { useOs } from '@mantine/hooks';
import Image from 'next/image';
import StyledAccordion from './StyledAccordion';
import CoolCode from './CoolCode';

const jsonTemp = `"{name}": {
        "prefix": "",
        "body": "",
        "description": ""
    },`;

type OS = {
  os: string;
};

const CmdPallet = ({ os }: OS) => {
  if (os === 'macos') {
    return (
      <React.Fragment>
        <Kbd>⌘</Kbd> + <Kbd>shift</Kbd> + <Kbd>P</Kbd>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Kbd>ctrl</Kbd> + <Kbd>shift</Kbd> + <Kbd>P</Kbd>
      </React.Fragment>
    );
  }
};

const FAQ = () => {
  const os = useOs();

  return (
    <MediaQuery largerThan='md' styles={{ width: '50vw' }}>
      <StyledAccordion sx={{ width: '80vw', paddingTop: '20px' }}>
        {/* ########## Intro section ########## */}
        <Accordion.Item label='What is a Snippet?'>
          <Text>A snippet has the following format: </Text>
          <Code block sx={{ padding: '10px' }}>
            {jsonTemp}
          </Code>
          Where
          <List>
            <List.Item>
              <CoolCode>name</CoolCode> - helps you identify quickly what the snippet is
            </List.Item>
            <List.Item>
              <CoolCode>prefix</CoolCode> - what you type to trigger the snippet
            </List.Item>
            <List.Item>
              <CoolCode>body</CoolCode> - the actual snippet
            </List.Item>
            <List.Item>
              <CoolCode>description</CoolCode> - describes the snippet (you will likely
              never see this)
            </List.Item>
          </List>
          <Divider my='sm' />
          <Text>
            Code snippets are templates that make it easier to enter repeating code
            patterns, such as loops or conditional-statements.
          </Text>
          <Space h='md' />
          <Text>
            In Visual Studio Code, snippets appear in IntelliSense (<CoolCode>⌃Space</CoolCode>)
            mixed with other suggestions, as well as in a dedicated snippet picker (
            <Text component='span' weight={700}>
              Insert Snippet{' '}
            </Text>
            in the Command Palette). There is also support for tab-completion: Enable it
            with <CoolCode>&quot;editor.tabCompletion&quot;: &quot;on&quot;</CoolCode>,
            type a
            <Text component='span' weight={700}>
              {' '}
              snippet prefix (trigger text)
            </Text>, and press <CoolCode>Tab</CoolCode> to insert a snippet.
          </Text>
          <Space h='md' />
          <Image
            alt='Snippet example'
            src='/snippet_example.gif'
            quality={75}
            layout='responsive'
            width={800}
            height={450}
          />
          <Text>
            For more information, visit{' '}
            <Anchor
              href='https://code.visualstudio.com/docs/editor/userdefinedsnippets'
              target='_blank'
            >
              the vscode docs
            </Anchor>.
          </Text>
        </Accordion.Item>

        {/* ########## How to section ########## */}
        <Accordion.Item label='How to use Snippet Builder'>
          <List type='ordered'>
            <List.Item>
              As you edit each of the fields above, the output section will update
              dynamically. Once you like what you have, simply click on the output box and
              the snippet will be added to your clipboard.
            </List.Item>
            <List withPadding listStyleType='disc'>
              <List.Item sx={{ paddingTop: '5px' }}>
                For the body of the snippet, you can write any code snippet you want, with
                the right formatting, in VS code, and simply copy and paste it here in the
                body section
              </List.Item>
            </List>
            <List.Item sx={{ paddingTop: '10px' }}>
              Next, to add it, go to VS code, open the command pallet ({<CmdPallet os={os} />}),
              search for <CoolCode>Configure User Snippet</CoolCode>, then type the
              specific programming language you want your snippet to apply to.
            </List.Item>
            <List.Item sx={{ paddingTop: '10px' }}>
              Paste in the snippet, save, and you are done! 🔥
            </List.Item>
            <Divider my='sm' />
            <Text>
              If there are any issues or suggestions, make sure to open an issues{' '}
              <Anchor
                href='https://github.com/jameszhang-a/snippet-generator/issues/new'
                target='_blank'
              >
                here.
              </Anchor>
            </Text>
          </List>
        </Accordion.Item>

        {/* ########## Advanced section ########## */}
        <Accordion.Item label='Tips and Tricks'>to be added...</Accordion.Item>
      </StyledAccordion>
    </MediaQuery>
  );
};

export default FAQ;
