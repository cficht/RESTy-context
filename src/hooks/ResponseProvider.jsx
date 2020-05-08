import React, { createContext, useReducer, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';

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

  useEffect(() => {
    const storedReqs = JSON.parse(localStorage.getItem('requests'));
    if(storedReqs) return dispatch({ type: 'LOAD_REQUESTS', payload: storedReqs });
  }, []);

  return (
    <ResponseContext.Provider value={{ state, dispatch }}>
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
