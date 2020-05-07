export const fetchResponse = (url, method, body) => {
  const reqObject = {
    method: method,
    headers: method === ('GET' || 'DELETE') ? {} : { 'Content-Type': 'application/json' },
    body: method === ('GET' || 'DELETE') ? null : body
  };
  return fetch(url, reqObject)
    .then(res => {
      let headers = {};
      for(let header of res.headers.entries()) headers[header[0]] = header[1];
      return res.json()
        .then(response => {
          return {
            headers: headers,
            response: response,
            ok: res.ok
          };       
        })
        .catch(error => error);    
    });
};
