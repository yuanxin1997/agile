import React from "react";
import Navbar from "../components/Navbar.js";
import { Breadcrumb, Layout, Menu, Table } from "antd";
const { Header, Content, Footer } = Layout;

const AcademicsPage = () => {
  const columns = [
    {
      title: "Module Code",
      dataIndex: "code",
    },
    {
      title: "Module Title",
      dataIndex: "title",
    },

  ];
  const data = [
    {
      key: "1",
      code: "BT1101",
      title: "Introduction to Business Analytics",
    },
    {
      key: "2",
      code: "BT2101",
      title: "Econometrics Modelling for Business Analytics",
    },
    {
      key: "3",
      code: "BT2102",
      title: "Data Management and Visualisation",
    },
    {
      key: "4",
      code: "BT2103",
      title: "Optimization Methods in Business Analytics",
    },
  ];

  return (
    <Layout>
      <Header style={{padding: 0}}>
        <Navbar />
      </Header>
      <Content style={{margin: "1em 30em 1em 30em", backgroundColor: "white"}}>
        <div>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </Content>
    </Layout>
  );
};

export default AcademicsPage;
