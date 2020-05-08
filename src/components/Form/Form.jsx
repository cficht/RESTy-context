import React from 'react';
import { useUrl, useDispatch, useBody, useMethod } from '../../hooks/ResponseProvider';
import { fetchResponse } from '../../services/request';

const Form = () => {
  const url = useUrl();
  const method = useMethod();
  const body = useBody();
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    switch(target.name) {
      case 'url':
        return dispatch({ type: 'SET_URL', payload: target.value });
      case 'method':
        return dispatch({ type: 'SET_METHOD', payload: target.value });
      case 'body':
        return dispatch({ type: 'SET_BODY', payload: target.value });
    }
  };

  const handleSubmit = () => {
    event.preventDefault();
    fetchResponse(url, method, body)
      .then(res => {
        if(res.ok) {
          dispatch({ type: 'SET_RES', payload: res });
          dispatch({ type: 'ADD_REQUESTS', payload: { url: url, method: method, body: body } });
        }
      });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="url" value={url} onChange={handleChange}></input>
        <div>
          <label><input type="radio" name="method" value="GET" onChange={handleChange} />GET</label>
          <label><input type="radio" name="method" value="POST" onChange={handleChange} />POST</label>
          <label><input type="radio" name="method" value="PUT" onChange={handleChange} />PUT</label>
          <label><input type="radio" name="method" value="PATCH" onChange={handleChange} />PATCH</label>
          <label><input type="radio" name="method" value="DELETE" onChange={handleChange} />DELETE</label>
        </div>
        <textarea name="body" value={body} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>   
    </section>
  );
}; 

export default Form;
