import React from "react";
import { Menu, Icon } from "antd";



const Navbar = () => {
  return (
    <Menu
      className="navbar"
      mode="horizontal"
      defaultSelectedKeys={["1"]}
    
    >
      <Menu.Item key="1">
        <span>
          <Icon type="user" />
          About
        </span>
      </Menu.Item>
      <Menu.Item key="2">
        <span>
          <Icon type="project" />
          Projects
        </span>
      </Menu.Item>
      <Menu.Item key="3">
        <span>
          <Icon type="heart" theme="twoTone" twoToneColor="#eb2f96" />
          Heart
        </span>
      </Menu.Item>
      <Menu.Item key="4">
        <span>
          <Icon type="message" theme="twoTone" twoToneColor="#52c41a" />
          Contact
        </span>
      </Menu.Item>
      <Menu.Item key="5">
        <span>
          <Icon type="github" />
          Github
        </span>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
