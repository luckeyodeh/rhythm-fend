import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home";
import Register from "./register";
import Dashboard from "./dashboard";
import Donate from "./donate";
import Search from "./searchpage";
import Profile from "./profile";
import NoMatch from "./noMatch";

const Main = () => (
  <main className="main-container">
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/donate" component={Donate} />
      <Route exact path="/search" component={Search} />
      <Route component={NoMatch} />
      <Route exact path="/rsg/:uniqueCode" component={Profile} />
    </Switch>
  </main>
);

export default Main;
