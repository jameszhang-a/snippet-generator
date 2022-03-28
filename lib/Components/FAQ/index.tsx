import { Accordion, Anchor, Code, MediaQuery, Space, Text } from '@mantine/core';
import Image from 'next/image';

const FAQ = () => {
  return (
    <MediaQuery largerThan='md' styles={{ width: '50vw' }}>
      <Accordion multiple sx={{ width: '80vw', paddingTop: '20px' }}>
        <Accordion.Item label='What is a Snippet?'>
          <Text>
            Code snippets are templates that make it easier to enter repeating code
            patterns, such as loops or conditional-statements.
          </Text>
          <Space h='md' />
          <Text>
            In Visual Studio Code, snippets appear in IntelliSense (<Code>⌃Space</Code>)
            mixed with other suggestions, as well as in a dedicated snippet picker (
            <Text component='span' weight={700}>
              Insert Snippet{' '}
            </Text>
            in the Command Palette). There is also support for tab-completion: Enable it
            with <Code>&quot;editor.tabCompletion&quot;: &quot;on&quot;</Code>, type a
            <Text component='span' weight={700}>
              {' '}
              snippet prefix (trigger text)
            </Text>, and press <Code>Tab</Code> to insert a snippet.
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

        <Accordion.Item label='How to use Snippet Builder'>hello</Accordion.Item>
      </Accordion>
    </MediaQuery>
  );
};

export default FAQ;
