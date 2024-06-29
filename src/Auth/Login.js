import { Button, Form, Input, Alert } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateAuthStatus } from "../Redux/authSlice";

const Login = ({ auth }) => {
  const [apistatus, setApistatus] = useState("init");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitform = async (loginInfo) => {
    setApistatus("pending");
    const { success } = await auth.loginUser(loginInfo);
    if (success) {
      dispatch(updateAuthStatus(true));
      navigate("/home");
    } else {
      setApistatus("error");
    }
  };

  return (
    <div className="form">
      {/* {apistatus === "success" && (
        <Alert type="success" showIcon message="Login successfull" closable />
      )} */}
      {apistatus === "error" && (
        <Alert
          type="error"
          showIcon
          message="Invalid credentials..."
          closable
        />
      )}
      <Form onFinish={submitform} layout="vertical">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { type: "email", message: "please enter valid email" },
            { required: true, message: "please enter mail" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <Input.Password placeholder="password" />
        </Form.Item>
        <Button
          loading={apistatus === "pending"}
          htmlType="submit"
          block
          type="primary"
        >
          Login
        </Button>
      </Form>
      <p>
        New user create account ?
        <Link to="/signup" className="link">
          signin here
        </Link>
      </p>
    </div>
  );
};

export default Login;
