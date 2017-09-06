
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/RandomMovie';

render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('app')
);
