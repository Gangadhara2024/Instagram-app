import { Alert, Button, Form, Input, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Signup = ({ auth }) => {
  const [apistatus, setApistatus] = useState("init");
  const [form] = useForm();

  const onSubmitForm = async (data) => {
    setApistatus("pending");
    const { success } = await auth.signupUser(data);
    setApistatus(success ? "success" : "error");
  };

  useEffect(() => {
    if (apistatus === "success") {
      form.resetFields();
    }
  }, [apistatus]);

  return (
    <div className="form">
      {apistatus === "success" && (
        <Alert
          type="success"
          showIcon
          message="signup success login now !"
          closable
        />
      )}
      {apistatus === "error" && (
        <Alert
          type="error"
          showIcon
          message="something went wrong try again....."
          closable
        />
      )}
      <Form onFinish={onSubmitForm} layout="vertical" form={form}>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "enter valid mail" }]}
        >
          <Input placeholder="enter your mail" />
        </Form.Item>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "please enter name" }]}
        >
          <Input placeholder="enter fullname" />
        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          rules={[{ required: true, message: "please enter city" }]}
        >
          <Input placeholder="enter your city" />
        </Form.Item>
        <Form.Item
          name="password"
          label="password"
          rules={[{ required: true, message: "Please enter password" }]}
        >
          <Input.Password placeholder="enter password"></Input.Password>
        </Form.Item>
        <Form.Item
          name="gender"
          label="Select your gender"
          rules={[{ required: true, message: "please enter gender" }]}
        >
          <Radio.Group>
            <Radio value="MALE">Male</Radio>
            <Radio value="FEMALE">Female</Radio>
          </Radio.Group>
        </Form.Item>
        <Button
          loading={apistatus === "pending"}
          htmlType="submit"
          block
          type="primary"
        >
          Signup
        </Button>
      </Form>
      <p>
        Already have an account ?
        <Link to="/login" className="link">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default Signup;
