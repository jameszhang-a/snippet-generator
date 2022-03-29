import { Code, CodeProps, createStyles } from '@mantine/core';

export default function CoolCode(props: CodeProps) {
  return (
    <Code
      sx={(theme) => ({
        backgroundColor: '#724e00',
        color: 'white'
      })}
      {...props}
    />
  );
}
