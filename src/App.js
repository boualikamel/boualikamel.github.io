import React from "react";
import Bubbles from "./Bubbles"
import Navbar from "./layouts/Navbar"
import Routes from "./layouts/Routes"
import {BrowserRouter as Router} from "react-router-dom";

import { Layout } from "antd";
const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Content style={{ height: "100%", padding: "24px 24px" }}>
          <Layout className="card">
          <Router>
            <Navbar/>
            <Content style={{ position: "relative" }}>
            <Routes></Routes>
            <Bubbles></Bubbles>
            </Content>
          </Router>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
