import React from 'react';
import { useUrl, useDispatch, useBody } from '../../hooks/ResponseProvider';

const Form = () => {
  const url = useUrl();
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

  return (
    <section>
      <form onSubmit={() => {}}>
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
