import { Group, TextInput, Textarea, MediaQuery } from '@mantine/core';
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

const labelStyle = { label: { color: '#B4CDED' } };

const InputArea = ({ input, handleChange }: Props) => {
  return (
    <React.Fragment>
      <Group p={8}>
        <TextInput
          placeholder=''
          label='name'
          styles={labelStyle}
          value={input.name}
          onChange={(e) => handleChange(e, 'name')}
        />
        <TextInput
          placeholder=''
          label='prefix (trigger)'
          styles={labelStyle}
          value={input.prefix}
          onChange={(e) => handleChange(e, 'prefix')}
        />
        <TextInput
          placeholder=''
          label='description'
          styles={labelStyle}
          value={input.description}
          onChange={(e) => handleChange(e, 'description')}
        />
      </Group>
      <MediaQuery largerThan='md' styles={{ width: '50vw' }}>
        <Textarea
          sx={{ width: '80vw' }}
          placeholder='Paste code here'
          variant='filled'
          onChange={(e) => handleChange(e, 'body')}
          autosize
          minRows={10}
        />
      </MediaQuery>
    </React.Fragment>
  );
};

export default InputArea;
