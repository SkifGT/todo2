import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import AppReducer from './redux/reducers';

import 'macro-css';

// Third-party declarations.
import 'bootswatch/dist/flatly/bootstrap.min.css';

// Application-wide CSS definitions.
import './stylesheets/index.css';
import './stylesheets/animations.css';

// import  store  from './redux/store';
const store = createStore(
  AppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = { store }>
      <App />
    </Provider>
  </React.StrictMode>
);

