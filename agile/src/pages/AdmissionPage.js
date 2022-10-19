import React from "react";
import Navbar from "../components/Navbar.js";
import { Breadcrumb, Layout, Menu, Row, Col, Space } from "antd";
const { Header, Content, Footer } = Layout;
const AdmissionPage = () => {
  return (
    <Layout>
      <Header style={{ padding: 0 }}>
        <Navbar />
      </Header>
      <Content
        style={{
          margin: "1em 40em 1em 40em",
          backgroundColor: "white",
          aRowgnContent: "start",
        }}
      >

        <Row>
          <Col span={24}><Row>1.  &nbsp; Understanding Admission requirements</Row></Col>
          <Col span={24}><Row>2.  &nbsp; Submit application online</Row></Col>
          <Col span={24}><Row>3.  &nbsp; Upload supporting documents</Row></Col>
          <Col span={24}><Row>4.  &nbsp; Make application fee payment</Row></Col>
          <Col span={24}><Row>5.  &nbsp; Check appplication status</Row></Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default AdmissionPage;
