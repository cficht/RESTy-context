import React, { createContext, useReducer, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchResponse } from '../services/request';

const ResponseContext = createContext();

const initialState = {
  url: '',
  method: '',
  body: '',
  res: {},
  requests: [],
  auth: 'none',
  username: '',
  password: '',
  token: ''
};

const match = (newRequest, storedRequests) => {
  return storedRequests.find(request => {
    if(request.url === newRequest.url && request.method === newRequest.method && request.body === newRequest.body) return true;
  });
};

export function reducer(state, action) {
  switch(action.type) {
    case 'SET_URL':
      return { ...state, url: action.payload };
    case 'SET_METHOD':
      return { ...state, method: action.payload };
    case 'SET_BODY':
      return { ...state, body: action.payload };
    case 'SET_RES':
      return { ...state, res: action.payload };
    case 'ADD_REQUESTS':
      if(match(action.payload, state.requests)) return { ...state, requests: [...state.requests] };  
      localStorage.setItem('requests', JSON.stringify([...state.requests, action.payload]));
      return { ...state, requests: [...state.requests, action.payload] };    
    case 'LOAD_REQUESTS':
      return { ...state, requests: action.payload };
    case 'SET_AUTH':
      return { ...state, auth: action.payload };
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_PASSWORD':
      return { ...state, password: action.payload };
    case 'SET_TOKEN':
      return { ...state, token: action.payload };
    default:
      return state;
  }
}

export const ResponseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { url, method, body, auth, username, password, token } = state;

  useEffect(() => {
    const storedReqs = JSON.parse(localStorage.getItem('requests'));
    if(storedReqs) return dispatch({ type: 'LOAD_REQUESTS', payload: storedReqs });
  }, []);

  const handleChange = ({ target }) => {
    dispatch({ type: target.name, payload: target.value });
  };

  const handleSubmit = () => {
    event.preventDefault();
    const base64 = require('base-64');
    let headers;
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

  const handleClick = ({ url, method, body }) => {
    dispatch({ type: 'SET_URL', payload: url });
    dispatch({ type: 'SET_METHOD', payload: method });
    dispatch({ type: 'SET_BODY', payload: body });
  };

  return (
    <ResponseContext.Provider value={{ state, dispatch, handleChange, handleSubmit, handleClick }}>
      {children}
    </ResponseContext.Provider>
  );
};

ResponseProvider.propTypes = {
  children: PropTypes.node
};

export const useGlobalState = () => {
  const { state } = useContext(ResponseContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(ResponseContext);
  return dispatch;
};

export const useUrl = () => {
  const { url } = useGlobalState();
  return url;
};

export const useMethod = () => {
  const { method } = useGlobalState();
  return method;
};

export const useBody = () => {
  const { body } = useGlobalState();
  return body;
};

export const useRes = () => {
  const { res } = useGlobalState();
  return res;
};

export const useRequests = () => {
  const { requests } = useGlobalState();
  return requests;
};

export const useAuth = () => {
  const { auth } = useGlobalState();
  return auth;
};

export const useHandleChange = () => {
  const { handleChange } = useContext(ResponseContext);
  return handleChange;
};

export const useHandleSubmit = () => {
  const { handleSubmit } = useContext(ResponseContext);
  return handleSubmit;
};

export const useHandleClick = () => {
  const { handleClick } = useContext(ResponseContext);
  return handleClick;
};
