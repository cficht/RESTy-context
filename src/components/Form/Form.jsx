import React from 'react';
import { useGlobalState, useDispatch } from '../../hooks/ResponseProvider';
import { fetchResponse } from '../../services/request';
import styles from './Form.css';

const Form = () => {
  const { url, method, body, auth, username, password, token } = useGlobalState();
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    dispatch({ type: target.name, payload: target.value });
  };

  const handleSubmit = () => {
    const base64 = require('base-64');
    let headers;
    event.preventDefault();
    if(auth === 'basic') headers = `Basic ${base64.encode(`${username}:${password}`)}`;
    if(auth === 'bearer') headers = `Bearer ${token}`;
    fetchResponse(url, method, body, headers)
      .then(res => {
        dispatch({ type: 'SET_RES', payload: res });
        if(res.ok) {
          dispatch({ type: 'ADD_REQUESTS', payload: { url: url, method: method, body: body } });
        }
      });
  };

  const authType = () => {
    if(auth === 'basic')
      return (
        <>
          <input type="text" name="SET_USERNAME" value={username} onChange={handleChange} placeholder="username"></input>
          <input type="text" name="SET_PASSWORD" value={password} onChange={handleChange} placeholder="password"></input>
        </>
      );
    if(auth === 'bearer')
      return (
        <>
          <input type="text" name="SET_TOKEN" value={token} onChange={handleChange} placeholder="token"></input>
        </>
      );
  };

  return (
    <section className={styles.Form}>
      <form onSubmit={handleSubmit}>
        <div className={styles.Left}>
          <input type="text" name="SET_URL" value={url} onChange={handleChange} placeholder="Enter URL"></input>
          <div>
            <label><input type="radio" name="SET_METHOD" value="GET" onChange={handleChange} checked={method === 'GET'}/>GET</label>
            <label><input type="radio" name="SET_METHOD" value="POST" onChange={handleChange} checked={method === 'POST'}/>POST</label>
            <label><input type="radio" name="SET_METHOD" value="PUT" onChange={handleChange} checked={method === 'PUT'}/>PUT</label>
            <label><input type="radio" name="SET_METHOD" value="PATCH" onChange={handleChange} checked={method === 'PATCH'}/>PATCH</label>
            <label><input type="radio" name="SET_METHOD" value="DELETE" onChange={handleChange} checked={method === 'DELETE'}/>DELETE</label>
          </div>
          <textarea name="SET_BODY" value={body} onChange={handleChange} placeholder="Enter JSON Body"></textarea>
          <button type="submit">Submit</button>
        </div>
        <div className={styles.Right}>
          <div className={styles.AuthTop}>
            <h3>Authorization</h3>
            <select id="auth" name="SET_AUTH" onChange={handleChange}>
              <option name="SET_AUTH" value="none">None</option>
              <option name="SET_AUTH" value="basic">Basic Auth</option>
              <option name="SET_AUTH" value="bearer">Bearer Token</option>
            </select>
          </div>
          <div className={styles.AuthBot}>
            {authType()}
          </div>
        </div>
      </form>   
    </section>
  );
}; 

export default Form;
