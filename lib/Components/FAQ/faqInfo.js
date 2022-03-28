import { Prism } from '@mantine/prism';

const howToText = `just use it`;
const demoCode = `import { Button } from '@mantine/core';

function Demo() {
  return <Button>Hello</Button>
}`;

const faqInfo = [
  { title: 'What is a Snippet', text: 'A snippet is a shortcut' },
  {
    title : 'How to use Snippet Builder',
    text  : <Prism language='tsx'>{howToText}</Prism>
  }
];

export { faqInfo };
