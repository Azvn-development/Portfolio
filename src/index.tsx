import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from '@/App';
import "@fontsource/source-sans-pro";
import '@/assets/styles/site.scss';

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path={'/'} component={App} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById('app'),
);
