import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { Route, BrowserRouter as Router } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import EMailForm from "./components/EMailForm";

axios.interceptors.request.use((request) => {
  console.log(request);
  return request;
});

const routing = (
  <Router>
    <Route exact path="/" component={App} />
    <Route path="/login" component={LoginForm} />
    <Route path="/register" component={RegisterForm} />
    <Route path="/sendmail" component={EMailForm} />
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
