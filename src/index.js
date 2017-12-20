import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';

import { Router, hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
import {loadProducts} from './actions/productActions';
import routes from './routes'
import { syncHistoryWithStore } from 'react-router-redux'

import { loadUsers } from './actions/userAction';
const store = configureStore();

const history = syncHistoryWithStore(hashHistory, store);
store.dispatch(loadUsers());
ReactDOM.render(
  <Provider store={store}>
 <Router history={history} routes={routes} />
</Provider>, document.getElementById('root'));
registerServiceWorker();