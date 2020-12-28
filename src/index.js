import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import AddProblem from "./Components/Add/AddProblem";
import Search from "./Components/Search/Search";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <div className="nav">
        <ul>
          <li>
            <Link to="/addproblem">Add Problem</Link>
          </li>
          <li>
            <Link to="/search">Search Problem</Link>
          </li>
        </ul>

        <Switch>
          <Route exact path="/addproblem">
            <AddProblem />
          </Route>

          <Route exact path="/search">
            <Search/>
          </Route>

          <Redirect from="/" to="/addproblem" />
        </Switch>

      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
