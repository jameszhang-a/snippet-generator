import { Grid, Group, TextInput, Textarea } from '@mantine/core';
import React from 'react';

type Props = {
  input: {
    name: string;
    prefix: string;
    body: string;
    description: string;
  };
  handleChange: Function;
};

const InputArea = ({ input, handleChange }: Props) => {
  return (
    <Grid>
      <Group p={8}>
        <TextInput
          placeholder='name'
          label='name'
          value={input.name}
          onChange={(e) => handleChange(e, 'name')}
        />
        <TextInput
          placeholder='shortcut'
          label='shortcut'
          value={input.prefix}
          onChange={(e) => handleChange(e, 'prefix')}
        />
        <TextInput
          placeholder='description'
          label='description'
          value={input.description}
          onChange={(e) => handleChange(e, 'description')}
        />
      </Group>
      <Grid.Col span={12}>
        <Textarea
          placeholder='Paste code here'
          variant='filled'
          onChange={(e) => handleChange(e, 'body')}
          autosize
          minRows={10}
        />
      </Grid.Col>
    </Grid>
  );
};

export default InputArea;
