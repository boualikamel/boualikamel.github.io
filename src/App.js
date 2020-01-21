import React from "react";
import Bubbles from "./Bubbles"
import Navbar from "./layouts/Navbar"
import Routes from "./layouts/Routes"
import { Layout } from "antd";
const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Content style={{ height: "100%", padding: "24px 24px" }}>
          <Layout className="card">
           <Navbar></Navbar>
            <Content style={{ padding: "24px 24px", position: "relative" }}>
            <Routes />
            <Bubbles />
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
