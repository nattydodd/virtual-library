import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Search from './containers/search';
import Show from './components/show';
import Home from './components/home';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/search" component={Search} />
    <Route path="/:id" component={Show} />
  </Route>
);
