import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers/index';

import createSagaMiddleware from 'redux-saga';

import App from './components/App';
import Home from './components/Home';
import UserSetting from './components/UserSetting';
import NotFound from './components/NotFound';
import { sagas } from './sagas/index';

import './stylesheets/main.scss';

const sagaMiddleware = createSagaMiddleware();
let middleware = applyMiddleware(routerMiddleware(browserHistory), sagaMiddleware);
if (process.env.NODE_ENV !== 'production') {
  middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension());
}
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);
sagaMiddleware.run(sagas);

ReactDom.render(
  <Provider store={store}>
    <Router history = {history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="user-setting(/:id)" component={UserSetting}/>
        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app'));
