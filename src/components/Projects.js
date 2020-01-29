import React from "react";
import { Card, Icon, Avatar, Col, Row } from 'antd';
const { Meta } = Card;

const Projects = () => {
  return (
    <div className="content-routes">
      <Row gutter={16}>
      <Col span={8}>
      <Card
        style={{ width: 200 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
      </Card>
      </Col>
      <Col span={8}>
      <Card
        style={{ width: 200 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
      </Card>
      </Col>
      <Col span={8}>

      <Card
        style={{ width: 200 }}
        cover={
          <img
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
          />
        }
      >
      </Card>
      </Col>
      </Row>

    </div>
  );
};

export default Projects;
