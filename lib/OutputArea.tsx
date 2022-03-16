import { Textarea } from '@mantine/core';
import React from 'react';

type Props = {
  target: string;
  onClick: Function;
};

const OutputArea = ({ target, onClick }: Props) => {
  return (
    <React.Fragment>
      <Textarea
        placeholder='output'
        variant='default'
        autosize
        value={target}
        styles={{ root: { width: '55vw' } }}
        onClick={() => onClick()}
        readOnly
        minRows={5}
      />
    </React.Fragment>
  );
};

export default OutputArea;
