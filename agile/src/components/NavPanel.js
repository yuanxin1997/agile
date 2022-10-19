import { Col, Layout, Menu, Row } from "antd";
import { HomeFilled, ReadFilled, ScheduleFilled } from "@ant-design/icons";
import React from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../logo.png"; // with import
const { Sider } = Layout;

const NavPanel = () => {
  const navigate = useNavigate();

  return (
    <>
      <Sider trigger={null} collapsible>
        <Row justify="center">
          <Col>
            <a href="/">
              <img src={logo} height="50" />
            </a>
          </Col>
        </Row>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <HomeFilled />,
              label: "Home",
              onClick: () => navigate("/"),
            },
            {
              key: "2",
              icon: <ReadFilled />,
              label: "Academics",
              onClick: () => navigate("/academics"),
            },
            {
              key: "3",
              icon: <ScheduleFilled />,
              label: "Admission",
              onClick: () => navigate("/admission"),
            },
          ]}
        />
      </Sider>
    </>
  );
};

export default NavPanel;
