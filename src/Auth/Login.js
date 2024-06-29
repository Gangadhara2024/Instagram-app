import { Alert, Button, Form, Input } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = ({ auth }) => {
  const [apistatus, setApistatus] = useState("init");

  const submitLogin = async (logindata) => {
    setApistatus("pending");
    const { success } = await auth.loginUser(logindata);
    setApistatus(success ? "success" : "error");
  };
  return (
    <div className="form">
      {apistatus === "success" && (
        <Alert showIcon message="Login successfull..." type="success" />
      )}
      {apistatus === "error" && (
        <Alert showIcon message="Invalid credentials !" type="error" />
      )}
      <Form layout="vertical" onFinish={submitLogin}>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "enter valid email" }]}
        >
          <Input placeholder="enter your mail" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "enter correct password" }]}
        >
          <Input.Password placeholder="password"></Input.Password>
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          block
          loading={apistatus === "pending"}
        >
          Login
        </Button>
        <b>
          New user create account ?
          <Link to="/signup" className="link">
            signup here
          </Link>
        </b>
      </Form>
    </div>
  );
};

export default Login;
