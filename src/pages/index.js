import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Components from "./Components/Components.jsx";
import LandingPage from "./landing-page";
import ProfilePage from "./ProfilePage/ProfilePage.jsx";
import LoginPage from "./LoginPage/LoginPage.jsx";
import FontAwesome from "../components/FontAwesome"

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
);

//<Route path="/landing-page" component={LandingPage} />