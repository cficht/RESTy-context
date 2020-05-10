import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { ResponseProvider } from './hooks/ResponseProvider';

render(
  <ResponseProvider>
    <App />
  </ResponseProvider>,
  document.getElementById('root')
);
