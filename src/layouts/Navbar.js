import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
  
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
        <Link to="/projects" />

      </Menu.Item>
      <Menu.Item key="3">
        <span>
        <Link to="/projects" />
          <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
          Heart
        </span>
        <Link to="/heart" />
      </Menu.Item>
      <Menu.Item key="4">
        <span>
          <Icon type="message" theme="twoTone" twoToneColor="#52c41a" />
          Contact
        </span>
        <Link to="/contact" />
      </Menu.Item>
    </Menu>
    
  );
};

export default Navbar;
