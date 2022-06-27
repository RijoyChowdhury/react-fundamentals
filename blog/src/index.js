import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import { customMiddleware } from './middlewares';

const root = createRoot(document.getElementById('root'));

root.render(
  <Provider
    store={createStore(reducers, applyMiddleware(...[thunk, customMiddleware]))}
  >
    <App />
  </Provider>
);
