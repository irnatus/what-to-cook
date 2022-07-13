import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

render(
  // wrap the App in the Provider Component and pass in the store

  <App />,
  document.getElementById('root')
);
