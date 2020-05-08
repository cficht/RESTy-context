import React from 'react';
import { useRequests, useDispatch } from '../../hooks/ResponseProvider';

const History = () => {
  const requests = useRequests();
  const dispatch = useDispatch();

  const handleClick = ({ url, method, body }) => {
    dispatch({ type: 'SET_URL', payload: url });
    dispatch({ type: 'SET_METHOD', payload: method });
    dispatch({ type: 'SET_BODY', payload: body });
  };

  const requestNodes = requests.map(request => {
    const home = request.url.split('/')[2];
    const user = request.url.split('.com')[1];
    return (<li key={`${request.url}-${request.method}-${request.body}`} onClick={() => handleClick(request)}>
      <h3>{request.method}</h3>
      <p>{home}</p>
      <p>{user}</p>
    </li>
    );
  });

  return (
    <>
      <h1>HISTORY</h1>
      <ul>
        {requestNodes}
      </ul>
    </>
  );
};

export default History;
