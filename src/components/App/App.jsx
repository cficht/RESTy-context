import React from 'react';
import Form from '../Form/Form';
import Display from '../Display/Display';
import History from '../History/History';
import styles from './App.css';

export default function App() {
  return (
    <>
      <main className={styles.Main}>
        <article className={styles.Left}>
          <History />
        </article>
        <article className={styles.Right}>
          <Form />
          <Display />
        </article>
      </main>
    </>
  );
}
