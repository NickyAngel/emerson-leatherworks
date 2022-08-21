import "./App.css";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Wallet from "./Wallet";
import Lighter from "./Lighter";
import Other from "./Other";
import history from "./history";

function App() {
  return (
    <div>
      <Navbar />
      <Router history={history}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/wallets">
            <Wallet />
          </Route>
          <Route path="/lighters">
            <Lighter />
          </Route>
          <Route path="/other">
            <Other />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
