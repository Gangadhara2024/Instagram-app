import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../Redux/thunk";

export const CreatePost = ({ postData }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const openpopup = () => {
    setOpen(true);
  };

  const closepopup = () => {
    setOpen(false);
  };

  const submitPostPopup = (postInfo) => {
    // postInfo.imageUrls = [postInfo.image];
    // delete postInfo.image;
    dispatch(createPost(postInfo));
  };

  return (
    <>
      <div>
        <button className="create" onClick={openpopup}>
          <span className="material-icons">add</span>
        </button>
        <b>{postData} Posts </b>
      </div>
      <Modal open={open} onCancel={closepopup} footer={null}>
        <Form onFinish={submitPostPopup}>
          <Form.Item
            label="Title"
            name="Title"
            rules={[{ required: true, message: "title is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Content"
            name="Content"
            rules={[{ required: true, message: "textarea is required" }]}
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="Image URL"
            name="Image URL"
            rules={[{ type: "URL", message: "Image URL is required" }]}
          >
            <Input />
          </Form.Item>
          <Button type="primary" block htmlType="submit">
            CREATE POST
          </Button>
        </Form>
      </Modal>
    </>
  );
};
