import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import 'primereact/resources/themes/omega/theme.css';
import 'primereact/resources/primereact.min.css';
import { Router, hashHistory } from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore';
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