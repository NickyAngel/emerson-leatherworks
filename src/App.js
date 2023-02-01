import "./App.css";
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Wallet from "./components/Wallet";
import Lighter from "./components/Lighter";
import Other from "./components/Other";
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
