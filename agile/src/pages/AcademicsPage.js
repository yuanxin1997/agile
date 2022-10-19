import { Button, Col, Layout, message, Row, Table } from "antd";
import React from "react";
import { signInWithGoogle } from "../firebase";
import mainlogo from "../mainlogo.png";
import { GoogleCircleFilled, GoogleOutlined } from "@ant-design/icons";
import { useState, useRef, useEffect } from "react";
import SignInSignUpModal from "../components/SignInSignUpModal.js";
import { auth, db, logout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { query, collection, getDocs, where } from "firebase/firestore";
const { Header, Content, Footer } = Layout;

const AcademicsPage = () => {
  const SignInSignUpModalRef = useRef();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) return;
  }, [user, loading]);

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
    <div>
      <SignInSignUpModal ref={SignInSignUpModalRef} />
      <div className="pin-top-right">
        <Row justify="space-between">
          {user ? (
            <>
              <Col span={9}>
                <Button
                  type="primary"
                  style={{
                    boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                    backgroundColor: "black",
                    borderColor: "black",
                  }}
                  size="large"
                  onClick={() => {
                    message.success("Sign Out Successful!");
                    logout();
                  }}
                >
                  Sign Out
                </Button>
              </Col>
            </>
          ) : (
            <>
              <Col span={9}>
                <Button
                  style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                  size="large"
                  onClick={() => SignInSignUpModalRef.current.showModal(false)}
                >
                  Sign up
                </Button>
              </Col>
              <Col span={9}>
                <Button
                  type="primary"
                  style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
                  size="large"
                  onClick={() => SignInSignUpModalRef.current.showModal(true)}
                >
                  Sign in
                </Button>
              </Col>
            </>
          )}
        </Row>
      </div>
      <div className="centered">
        <div>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </div>
  );
};

export default AcademicsPage;
