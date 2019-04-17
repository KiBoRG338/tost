import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import routes from './src/Config/routes'


ReactDOM.render(
  <Router>
    { 
      routes.map((route, i) => (
        <Route
          key={i}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))
    }
  </Router>,
  document.getElementById('root')
);