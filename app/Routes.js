import React from 'react';
import { Switch, Route } from 'react-router';
import { Redirect } from "react-router-dom";
// import routes from './constants/routes';
import App from './containers/App';
// import HomePage from './containers/HomePage';
// import CounterPage from './containers/CounterPage';

import "bootstrap/dist/css/bootstrap.css";
import "./assets/scss/paper-dashboard.scss?v=1.1.0";
import "./assets/demo/demo.css";
import "perfect-scrollbar/css/perfect-scrollbar.css";
import "./custom.css";

import AdminLayout from "./layouts/Admin.jsx";

export default () => (
  <App>
    <Switch>
      <Route path="/admin" render={props => <AdminLayout {...props} />} />
      <Redirect to="/admin/facebook" />
    </Switch>
  </App>
);
