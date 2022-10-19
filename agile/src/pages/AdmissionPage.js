import { Button, Col, Layout, message, Row } from "antd";
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

const AdmissionPage = () => {
  const SignInSignUpModalRef = useRef();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (loading) return;
    if (user) return;
  }, [user, loading]);

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
        <div
          style={{
            backgroundColor: "white",
          }}
        >
          <h1>
            <ol style={{ textAlign: "start" }}>
              <li>Understanding Admission requirements</li>
              <li>Submit application online</li>
              <li>Upload supporting documents</li>
              <li>Make application fee payment</li>
              <li>Check appplication statu</li>
            </ol>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPage;
