import React from 'react';
import { useGlobalState, useDispatch } from '../../hooks/ResponseProvider';
import { fetchResponse } from '../../services/request';

const Form = () => {
  const { url, method, body } = useGlobalState();
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch({ type: target.name, payload: target.value });
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
        <input type="text" name="SET_URL" value={url} onChange={handleChange}></input>
        <div>
          <label><input type="radio" name="SET_METHOD" value="GET" onChange={handleChange} />GET</label>
          <label><input type="radio" name="SET_METHOD" value="POST" onChange={handleChange} />POST</label>
          <label><input type="radio" name="SET_METHOD" value="PUT" onChange={handleChange} />PUT</label>
          <label><input type="radio" name="SET_METHOD" value="PATCH" onChange={handleChange} />PATCH</label>
          <label><input type="radio" name="SET_METHOD" value="DELETE" onChange={handleChange} />DELETE</label>
        </div>
        <textarea name="SET_BODY" value={body} onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>   
    </section>
  );
}; 

export default Form;
