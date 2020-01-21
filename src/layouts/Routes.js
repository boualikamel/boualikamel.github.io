import React from "react";

import About from "../components/About"
import Projects from "../components/Projects"
import Heart from "../components/Heart"
import Contact from "../components/Contact"

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Routes = () => {
  return (
  <div className="routes">
   <Route path="/" component={About} />
   <Route path="/projects" component={Projects} />
   <Route path="/heart" component={Heart} />
   <Route path="/contact" component={Contact} />
   {/* <Route path="/github" component={Github} /> */}
   </div>
  );
};

export default Routes;
