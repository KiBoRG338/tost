import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux'

import store from './src/store'

import routes from 'Config/routes'


ReactDOM.render(
  <Provider store={store}>
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
  </Router>
  </Provider>,
  document.getElementById('root')
);