import { Popover, Text } from '@mantine/core';
import React from 'react';
import CopyArea from './CopyArea';

type Props = { clipboard: any; target: string; copyResult: Function };

const OutputArea = ({ clipboard, target, copyResult }: Props) => {
  return (
    <Popover
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
      <Text color='green'>Copied to clipboard!</Text>
    </Popover>
  );
};

export default OutputArea;
