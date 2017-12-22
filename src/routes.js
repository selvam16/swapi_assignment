import React from 'react';
import { Router, Route } from 'react-router';
import App_Home from './App_Home'
import App from './App'
export default (
    <Router>
        <Route path="/" component={App_Home} />       
        <Route path="/app" component={App} />       
    </Router>
)