import React from 'react';
import ReactJson from 'react-json-view';
import { useRes } from '../../hooks/ResponseProvider';
import styles from './Display.css';

const Display = () => {
  const res = useRes();
  
  return (
    <section className={styles.Display}>
      <ReactJson src={res.headers} theme="tomorrow" name="Headers"/>
      <ReactJson src={res.response} theme="tomorrow" name="Response"/>
    </section>
  );
};

export default Display;
