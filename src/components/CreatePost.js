import { Button, Form, Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "antd/es/form/Form";
import { createPost } from "../Redux/thunk";

export const CreatePost = ({ posts }) => {
  const [openmodal, setOpenmodal] = useState(false);
  const dispatch = useDispatch();
  const [form] = useForm();

  const createPostStatus = useSelector((state) => state.POST.createAPIStatus);
  const openModel = () => {
    setOpenmodal(true);
  };

  const submitmodal = (postInfo) => {
    // postInfo.imageUrls = [postInfo.image];
    // delete postInfo.image;
    dispatch(createPost(postInfo));
  };
  useEffect(() => {
    if (createPostStatus === "success") {
      form.resetFields();
      setOpenmodal(false);
    }
  }, [createPostStatus]);
  return (
    <div>
      <button className="create" onClick={openModel}>
        <span className="material-icons addicon">add</span>
      </button>
      <b> {posts} Posts </b>
      <Modal
        open={openmodal}
        footer={null}
        onCancel={() => setOpenmodal(false)}
      >
        <Form onFinish={submitmodal} form={form}>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Title is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="content"
            label="Content"
            rules={[{ required: true, message: "content is required" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            name="imageUrls"
            label="Image Urls"
            rules={[{ type: "url", message: "Image Url is invalid" }]}
          >
            <Input />
          </Form.Item>

          <Button
            htmlType="submit"
            type="primary"
            block
            loading={createPostStatus === "pending"}
          >
            CREATE POST
          </Button>
        </Form>
      </Modal>
    </div>
  );
};
