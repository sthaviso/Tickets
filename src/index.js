import React from 'react';
import ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { reducers } from './reducers/index'

import App from './components/App';
import Home from './components/Home';
import UserSetting from './components/UserSetting';
import NotFound from './components/NotFound';

import './stylesheets/main.scss';
// build the users list
let tickets = [
  {
    'key' : 1,
    'img' : 'https://randomuser.me/api/portraits/men/79.jpg',
    'name' : 'Jack Sparrow',
    'timestamp' : '09:45AM',
    'title' : 'What is my vacation policy?',
    'messages' : [{
      'key' : '1',
      'img': 'https://randomuser.me/api/portraits/men/79.jpg',
      'question': 'What is my vacation policy?',
      'channel' : 'e-mail',
      'time' : '30 mins ago',
      'isAdmin': false
    },{
        'key' : '2',
        'img': 'https://randomuser.me/api/portraits/men/38.jpg',
        'question': 'We have an unlimited vacation time off.',
        'channel' : 'e-mail',
        'time' : '15 mins ago',
        'isAdmin': true
    }]
  },
  {
    'key' : 2,
    'img' : 'https://randomuser.me/api/portraits/men/26.jpg',
    'name' : 'John Doe',
    'timestamp' : '08:45AM',
    'title' : 'I need help setting up a printer.',
    'messages' : [{
      'key' : '1',
      'img': 'https://randomuser.me/api/portraits/men/26.jpg',
      'question': 'I need help setting up a printer',
      'channel' : 'e-mail',
      'time' : '30 mins ago',
      'isAdmin': false
    },{
      'key' : '2',
      'img': 'https://randomuser.me/api/portraits/men/38.jpg',
      'question': 'Sure. Where are you located?',
      'channel' : 'e-mail',
      'time' : '15 mins ago',
      'isAdmin': true
    }]

  },
  {
    'key' : 3,
    'img' : 'https://randomuser.me/api/portraits/women/45.jpg',
    'name' : 'Jane Doe',
    'timestamp' : '07:45AM',
    'title' : 'How long is my maternity leave?',
    'messages' : [{
      'key' : '1',
      'img': 'https://randomuser.me/api/portraits/women/45.jpg',
      'question': 'How long is my maternity leave?',
      'channel' : 'e-mail',
      'time' : '30 mins ago',
      'isAdmin': false
    },{
      'key' : '2',
      'img': 'https://randomuser.me/api/portraits/men/38.jpg',
      'question': '90 days',
      'channel' : 'e-mail',
      'time' : '15 mins ago',
      'isAdmin': true
    }]
  }
];

const initial_state = {
  tickets: {
    list: tickets,
  },
  selectedTicketKey: 1
}

let middleware = applyMiddleware(routerMiddleware(browserHistory));
const store = createStore(reducers, initial_state, middleware);
const history = syncHistoryWithStore(browserHistory, store);

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
