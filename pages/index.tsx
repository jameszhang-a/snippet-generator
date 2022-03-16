import type { NextPage } from 'next'
import { Anchor, AppShell, createStyles, Navbar } from '@mantine/core';
import { useState } from 'react';
import Footer from '../lib/Footer/Footer';
import TopNav from '../lib/TopNav/TopNav';
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
          <TopNav opened={opened} setOpened={setOpened} classes={classes} />
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
        <main className={styles.main}>
          <h1 className={styles.title}>Snippet Builder</h1>
          <br />
          {/* main app in here */}
          <Translation />
        </main>

        {/* <Footer /> */}
      </AppShell>
    </div>
  );
};

export default Home;
