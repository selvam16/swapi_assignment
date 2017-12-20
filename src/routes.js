import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App_Home from './App_Home'
import App from './App'
import Dashboard from './components/home/dashboard'
export default (
    <Router>
        <Route path="/" component={App_Home} />       
        <Route path="/app" component={App} />       
    </Router>
)