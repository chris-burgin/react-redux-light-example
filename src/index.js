// react
import React from 'react';
import ReactDOM from 'react-dom';

// redux
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// component
import './index.css';
import App from './components/App/App';

// service worker
import registerServiceWorker from './registerServiceWorker';

// configure store
const store = configureStore();

// render
ReactDOM.render(
  <Provider store={store}> 
    <App /> 
  </Provider>, 
  document.getElementById('root'));

// register service worker
registerServiceWorker();
