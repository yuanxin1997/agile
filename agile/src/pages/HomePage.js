import React from "react";
import Navbar from "../components/Navbar.js";
import logo from "../logo.png";
import { Breadcrumb, Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;

const HomePage = () => {
  return (
    <Layout>
      <Header style={{padding: 0}}>
        <Navbar />
      </Header>
      <Content style={{margin: "1em 30em 1em 30em", backgroundColor: "white"}}>
        <div>
          <img src={logo} width="50%" height="50%" />
          <div>
            <h1>NUS is a leading research university in Asia</h1>
          </div>
        </div>
      </Content>
    </Layout>
  );
};

export default HomePage;
