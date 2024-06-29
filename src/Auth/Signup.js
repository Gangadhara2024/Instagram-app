import { Alert, Button, Form, Input, Radio } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({ auth }) => {
  const [apistatus, setApistatus] = useState("init");

  const onSubmitForm = async (data) => {
    setApistatus("pending");
    const { success } = await auth.signupUser(data);
    setApistatus(success ? "success" : "error");
  };
  return (
    <div className="form">
      {apistatus === "success" && (
        <Alert
          message="Signup success login now..."
          showIcon
          type="success"
          closable
        />
      )}
      {apistatus === "error" && (
        <Alert showIcon message="Signup failed !" closable type="error" />
      )}
      <Form layout="vertical" onFinish={onSubmitForm}>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "enter valid email" }]}
        >
          <Input placeholder="enter your mail" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "enter fullname name" }]}
        >
          <Input placeholder="enter your name" />
        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: "enter city" }]}
        >
          <Input placeholder="enter your city" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "enter correct password" }]}
        >
          <Input.Password placeholder="password"></Input.Password>
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
          rules={[{ required: true, message: "enter gender" }]}
        >
          <Radio.Group>
            <Radio value="MALE">Male</Radio>
            <Radio value="FEMALE">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Button
          htmlType="submit"
          type="primary"
          block
          loading={apistatus === "pending"}
        >
          Sign up
        </Button>
        <b>
          Already have an account ?
          <Link to="/login" className="link">
            Login here
          </Link>
        </b>
      </Form>
    </div>
  );
};

export default Signup;
