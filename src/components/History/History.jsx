import React from 'react';
import { useRequests, useHandleClick } from '../../hooks/ResponseProvider';

const History = () => {
  const requests = useRequests();
  const handleClick = useHandleClick();

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
