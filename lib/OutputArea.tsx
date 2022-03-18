import { Button, MediaQuery, Popover, Text } from '@mantine/core';
import React from 'react';
import CopyArea from './CopyArea';

type Props = {
  clipboard: any;
  target: string;
  copyResult: Function;
  setTarget: Function;
  handleChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const OutputArea = ({
  clipboard,
  target,
  copyResult,
  setTarget,
  handleChange
}: Props) => {
  return (
    <React.Fragment>
      <MediaQuery largerThan='md' styles={{ width: '50vw' }}>
        <CopyArea
          target={target}
          setTarget={setTarget}
          handleChange={handleChange}
        />
      </MediaQuery>
      <Button
        color={clipboard.copied ? 'teal' : 'blue'}
        onClick={() => copyResult()}
      >
        {clipboard.copied ? 'copied to clipboard!' : 'Copy snippet'}
      </Button>
    </React.Fragment>
  );
};

export default OutputArea;
