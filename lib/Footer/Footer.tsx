import React from 'react';
import styles from '../../styles/Home.module.css';

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={styles.footer}>
      <a
        href='https://github.com/jameszhang-a/wordle-solver'
        target='_blank'
        rel='noopener noreferrer'
      >
        made by jz
      </a>
    </footer>
  );
};

export default Footer;
