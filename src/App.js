import React from 'react';
import './App.css';
import { Layout } from 'antd';
const { Content } = Layout;
function App() {
  return (
    <div className="App">
    <Layout className="layout">
        <Content style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
      </Content>
    </Layout>
    </div>
  );
}

export default App;
