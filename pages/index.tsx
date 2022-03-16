import type { NextPage } from 'next'
import {
  Anchor,
  AppShell,
  Burger,
  createStyles,
  Grid,
  Header,
  MediaQuery,
  Navbar
} from '@mantine/core';
import Head from 'next/head';
import { useState } from 'react';
import Translation from '../lib/Translation';
import styles from '../styles/Home.module.css';

const useStyles = createStyles((theme) => ({
  navbar: {
    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  }
}));

const Home: NextPage = () => {
  const { classes } = useStyles();
  const [ opened, setOpened ] = useState(false);

  return (
    <div className={styles.container}>
      <AppShell
        fixed
        navbarOffsetBreakpoint='sm'
        header={
          <Header height={50} p='md'>
            <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size='sm'
                mr='xl'
              />
            </MediaQuery>
            <Grid justify='flex-end' className={classes.links}>
              <Grid.Col span={3}>James Zhang</Grid.Col>
            </Grid>
          </Header>
        }
        navbar={
          <Navbar
            className={classes.navbar}
            width={{ base: '100%', sm: 0 }}
            hidden={!opened}
          >
            <Anchor>Home</Anchor>
            <Anchor>Features</Anchor>
            <Anchor>Pricing</Anchor>
          </Navbar>
        }
      >
        <Head>
          <title>VS Code Snippet Generator</title>
          <meta
            name='description'
            content='Simple app to generate a VS Code snipped from any code'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Snippet Generator</h1>
          <br />
          {/* main app in here */}
          <Translation />
        </main>

        <footer className={styles.footer}>
          <a
            href='https://github.com/jameszhang-a/wordle-solver'
            target='_blank'
            rel='noopener noreferrer'
          >
            made by jz
          </a>
        </footer>
      </AppShell>
    </div>
  );
};

export default Home;
