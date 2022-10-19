import { Button, Form, Input, message, Modal } from "antd";
import FormItem from "antd/es/form/FormItem/index.js";
import { forwardRef, useImperativeHandle, useState } from "react";
import styled from "styled-components";
import { GoogleCircleFilled, GoogleOutlined } from "@ant-design/icons";
import {
  auth,
  logInWithEmailAndPassword,
  signInWithGoogle,
  registerWithEmailAndPassword,
} from "../firebase";

const SignInSignUpModal = ({ _ }, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const [form] = Form.useForm();

  useImperativeHandle(
    ref,
    () => ({
      showModal: (requestSignIn) => {
        setIsSignIn(requestSignIn);
        setIsModalVisible(true);
      },
    }),
    []
  );

  const register = async (values) => {
    try {
      const { name, email, password } = values;
      await registerWithEmailAndPassword(name, email, password);
      form.resetFields();
      message.success("Sign In Successful!");
      setIsModalVisible(false);
    } catch (err) {
      message.error(err);
    }
  };

  const login = async (values) => {
    try {
      const { email, password } = values;
      await logInWithEmailAndPassword(email, password);
      form.resetFields();
      message.success("Sign In Successful!");
      setIsModalVisible(false);
    } catch (err) {
      message.error(err);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    message.error("Please try it again!");
  };

  return (
    <Modal
      title={null}
      centered
      visible={isModalVisible}
      onCancel={handleCancel}
      width={350}
      footer={null}
    >
      <ModalContentWrapper>
        {isSignIn ? (
          <Form
            id="signInForm"
            name="signInForm"
            form={form}
            layout="vertical"
            onFinish={login}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                placeholder="Enter your email"
                size="large"
                className="input-sdn"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                type="password"
                placeholder="Enter your password"
                size="large"
                className="input-sdn"
              />
            </Form.Item>

            <FormItem>
              <Button
                style={{
                  width: "100%",
                  height: "3em",
                  background: "black",
                  borderColor: "black",
                }}
                className="center"
                type="primary"
                htmlType="submit"
              >
                Sign In
              </Button>
            </FormItem>
            <Button
              style={{ width: "100%", height: "3em" }}
              className="center"
              type="primary"
              icon={<GoogleOutlined />}
              onClick={() => {
                setIsModalVisible(false);
                signInWithGoogle();
              }}
            >
              Sign In with Google
            </Button>

            <div style={{ display: "flex", justifyContent: "center" }}>
              Don't have an account?
              <span className="link-btn" onClick={() => setIsSignIn(false)}>
                &nbsp;Sign up&nbsp;
              </span>
              now.
            </div>
          </Form>
        ) : (
          <Form
            id="signUpForm"
            name="signUpForm"
            form={form}
            layout="vertical"
            onFinish={register}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                placeholder="Enter your name"
                size="large"
                className="input-sdn"
              />
            </Form.Item>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                placeholder="Enter your email"
                size="large"
                className="input-sdn"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input
                type="password"
                placeholder="Enter your password"
                size="large"
                className="input-sdn"
              />
            </Form.Item>

            <FormItem>
              <Button
                style={{
                  width: "100%",
                  height: "3em",
                  background: "black",
                  borderColor: "black",
                }}
                className="center"
                type="primary"
                htmlType="submit"
              >
                Sign Up
              </Button>
            </FormItem>

            <Button
              style={{ width: "100%", height: "3em" }}
              className="center"
              type="primary"
              icon={<GoogleOutlined />}
              onClick={() => {
                setIsModalVisible(false);
                signInWithGoogle();
              }}
            >
              Sign Up with Google
            </Button>

            <div style={{ display: "flex", justifyContent: "center" }}>
              Already have an account?
              <span className="link-btn" onClick={() => setIsSignIn(true)}>
                &nbsp;Sign in&nbsp;
              </span>
              now.
            </div>
          </Form>
        )}
      </ModalContentWrapper>
    </Modal>
  );
};

const ModalContentWrapper = styled.div`
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
`;
export default forwardRef(SignInSignUpModal);
