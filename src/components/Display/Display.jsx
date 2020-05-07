import React from 'react';
import ReactJson from 'react-json-view';
import { useRes } from '../../hooks/ResponseProvider';

const Display = () => {
  const res = useRes();
  return (
    <>
      <ReactJson src={res.headers} theme="tomorrow" name="Headers"/>
      <ReactJson src={res.response} theme="tomorrow" name="Response"/>
    </>
  );
};

export default Display;
