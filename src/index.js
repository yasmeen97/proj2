import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";
import "assets/scss/material-kit-react.scss?v=1.8.0";
import * as firebase from 'firebase';
// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/LandingPage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import RegisterPage from "views/LoginPage/Register.js";
import PdfPage from "views/PdfPage/PdfPage.js";
//import Home from "views/ProfilePage/Home.js";
import Cources from "views/LandingPage/Cources.js";
import Slides from "views/LandingPage/pdfss.js";
/*
var config ={

  
    apiKey: "AIzaSyD8YEaV2OvwSL-51tAzcvD9JtQj-7jAwkI",
    authDomain: "myproject-6ecef.firebaseapp.com",
    databaseURL: "https://myproject-6ecef.firebaseio.com",
    projectId: "myproject-6ecef",
    storageBucket: "myproject-6ecef.appspot.com",

  };

firebase.initializeApp(config);
*/
var hist = createBrowserHistory();
ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/reg-page" component={RegisterPage} />
      <Route path="/pdf" component={PdfPage} />
      <Route path="/co" component={Cources} />
      <Route path="/slides" component={Slides} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
 // <Route path="/cr" component={Cources} /> <Route path="/home" component={Home} /><Route path="/h" component={Home} /><Route path="/home" component={Home} />