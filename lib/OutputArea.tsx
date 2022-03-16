import { MediaQuery, Textarea } from '@mantine/core';
import React from 'react';

type Props = {
  target: string;
  onClick: Function;
};

const OutputArea = ({ target, onClick }: Props) => {
  return (
    <React.Fragment>
      <MediaQuery largerThan='sm' styles={{ width: '50vw' }}>
        <Textarea
          placeholder='output'
          variant='default'
          autosize
          value={target}
          sx={{ width: '80vw' }}
          onClick={() => onClick()}
          readOnly
          minRows={5}
        />
      </MediaQuery>
    </React.Fragment>
  );
};

export default OutputArea;
