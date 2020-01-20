import React from 'react';
import './App.css';

import { Layout, Menu,  Icon } from 'antd';
const { Content} = Layout;

function App() {
  return (
    <div className="App">
    <Layout className="layout">
    <Content style={{ height:'100%',padding: '24px 24px' }}>
      <Layout style={{ background: '#fff',  height:'100%' }}>
          <Menu mode="horizontal" defaultSelectedKeys={['1']} style={{ textAlign: 'center'}}>
          
              <Menu.Item key="1"><span><Icon type="user" />About</span></Menu.Item>
              <Menu.Item key="2"><span><Icon type="project" />Projects</span></Menu.Item>
              <Menu.Item key="3"><span><Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />Heart</span></Menu.Item>
              <Menu.Item key="4"><span><Icon type="message" theme="twoTone" twoToneColor="#52c41a"/>Contact</span></Menu.Item>
              <Menu.Item key="5"><span><Icon type="github" />Github</span></Menu.Item>
           
          </Menu>
        <Content style={{ padding: '24px 24px', minHeight: 280 }}>Content</Content>
      </Layout>
    </Content>
    </Layout>
    </div>
  );
}

export default App;
