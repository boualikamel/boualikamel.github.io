import React from "react";
import About from "../components/About";
import Projects from "../components/Projects";
import Heart from "../components/Heart";
import Contact from "../components/Contact";
import Github from "../components/Github.js";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  return (

    <Switch>
      <Route exact path="/"><About /></Route>
      <Route path="/projects" ><Projects/></Route>
      <Route path="/heart" ><Heart/></Route>
      <Route path="/contact"  ><Contact/></Route>
      <Route path="/github"><Github/></Route>
    </Switch>
  );
};

export default Routes;
