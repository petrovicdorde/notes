import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AddProblem from "./Components/Add/AddProblem";
import Search from "./Components/Search/Search";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";

import './index.sass';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <>
        <Navbar bg="light" expand="lg">
          <Link className="nav-link" to="/addproblem">
            Add Problem
          </Link>
          <Link className="nav-link" to="/search">
            Search Problem
          </Link>
        </Navbar>

        <Switch>
          <Route exact path="/addproblem">
            <AddProblem />
          </Route>

          <Route exact path="/search">
            <Search />
          </Route>

          <Redirect from="/" to="/addproblem" />
        </Switch>
      </>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
