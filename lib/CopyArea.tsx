import { Textarea } from '@mantine/core';
import React from 'react';

type Props = {
  target: string;
  setTarget: Function;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const CopyArea = ({ target, setTarget, handleChange }: Props) => {
  return (
    <React.Fragment>
      <Textarea
        placeholder='output'
        variant='default'
        autosize
        value={target}
        onChange={handleChange}
        minRows={5}
      />
    </React.Fragment>
  );
};

export default CopyArea;
