import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const ResponseContext = createContext();

const initialState = {
  url: '',
  method: '',
  body: ''
};

export function reducer(state, action) {
  switch(action.type) {
    case 'SET_URL':
      return { ...state, url: action.payload };
    case 'SET_METHOD':
      return { ...state, method: action.payload };
    case 'SET_BODY':
      return { ...state, body: action.payload };
    default:
      return state;
  }
}

export const ResponseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
