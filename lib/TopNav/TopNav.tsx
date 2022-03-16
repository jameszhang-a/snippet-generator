import { MediaQuery, Burger, Grid, Header } from '@mantine/core';
import { MarkGithubIcon } from '@primer/octicons-react';
import React from 'react';
import { HeaderControl } from './HeaderControl';

type Props = {
  opened: boolean;
  setOpened: Function;
  classes: Record<'navbar' | 'links', string>;
};

const TopNav = ({ opened, setOpened, classes }: Props) => {
  return (
    <Header height={50} p='md'>
      <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
        <Burger
          opened={opened}
          onClick={() => setOpened((o: boolean) => !o)}
          size='sm'
          mr='xl'
        />
      </MediaQuery>
      <Grid justify='flex-end' className={classes.links}>
        <Grid.Col span={3} pt={0}>
          <HeaderControl
            link='https://github.com/jameszhang-a/snippet-generator'
            tooltip='Source code'
            hideOnMobile
          >
            <MarkGithubIcon size={20} />
          </HeaderControl>
        </Grid.Col>
      </Grid>
    </Header>
  );
};

export default TopNav;
