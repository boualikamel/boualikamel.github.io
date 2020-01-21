import React from "react";
import { Menu, Icon } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
    <Menu
      className="navbar"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
    
    >
      <Menu.Item key="1">
        <span>
          <Icon type="home"  theme="twoTone" twoToneColor="#9900ff"/>
          About
        </span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="2">
        <span>
          <Icon type="project" theme="twoTone" twoToneColor="#ff0000" />
          Projects
        </span>
      </Menu.Item>
      <Menu.Item key="3">
        <span>
        <Link to="/" />
          <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
          Heart
        </span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="4">
        <span>
          <Icon type="message" theme="twoTone" twoToneColor="#52c41a" />
          Contact
        </span>
        <Link to="/" />
      </Menu.Item>
      <Menu.Item key="5">
        <span>
          <Icon type="github" />
          Github
        </span>
        <Link to="/" />
      </Menu.Item>
    </Menu>
    </Router>
  );
};

export default Navbar;
