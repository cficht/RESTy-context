import React from 'react';
import Form from '../Form/Form';
import Display from '../Display/Display';
import History from '../History/History';
import styles from './App.css';
import Header from '../Header/Header';

export default function App() {
  return (
    <>
      <header className={styles.Header}>
        <Header />
      </header>
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
