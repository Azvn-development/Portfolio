import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { globalHistory } from './GlobalHistory';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from '@/App';
import "@fontsource/source-sans-pro";
import '@/assets/styles/site.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router history={globalHistory}>
      <Switch>
        <Route path={'/'} component={App} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('app'),
);
