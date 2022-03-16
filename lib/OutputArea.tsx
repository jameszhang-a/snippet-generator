import { MediaQuery, Popover, Text } from '@mantine/core';
import React from 'react';
import CopyArea from './CopyArea';

type Props = { clipboard: any; target: string; copyResult: Function };

const OutputArea = ({ clipboard, target, copyResult }: Props) => {
  return (
    <MediaQuery largerThan='sm' styles={{ width: '65vw' }}>
      <Popover
        pt={20}
        sx={{ width: '80vw' }}
        opened={clipboard.copied}
        target={<CopyArea target={target} onClick={copyResult} />}
        position='bottom'
        placement='center'
        withArrow
        trapFocus={false}
        closeOnEscape={false}
        transition='scale-y'
        radius='lg'
        spacing='xs'
      >
        <Text color='#6DA34D'>Copied to clipboard!</Text>
      </Popover>
    </MediaQuery>
  );
};

export default OutputArea;
