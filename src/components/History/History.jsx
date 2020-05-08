import React from 'react';
import { useRequests } from '../../hooks/ResponseProvider';

const History = () => {
  const requests = useRequests();
  const requestNodes = requests.map(request => {
    const home = request.url.split('/')[2];
    const user = request.url.split('.com')[1];
    return (<li key={`${request.url}-${request.method}-${request.body}`}>
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
