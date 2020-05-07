import React from 'react';
import { useRequests } from '../../hooks/ResponseProvider';

const History = () => {
  const requests = useRequests();
  const requestNodes = requests.map(request => (
    <li key={`${request.url}-${request.method}-${request.body}`}>
      {request.url}
    </li>
  ));

  // });
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
