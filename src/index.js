import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import Home from './main/react/home/Home';
import './index.css';

ReactDOM.render(
<Router history={browserHistory}>
  <Route path="/" component={Home} />
</Router>
,
  document.getElementById('root')
);
