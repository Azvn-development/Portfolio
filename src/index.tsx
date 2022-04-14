import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from '@/App';
import "@fontsource/source-sans-pro";
import '@/assets/styles/site.scss';

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('app'),
);
