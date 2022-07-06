import { Button, Checkbox, Form, Input } from "antd";
import React from "react";
import "antd/dist/antd.css";
import "./UserForm.css";

const { TextArea } = Input;

const UserForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      className="user-form"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrFormerCol={{
        span: 16,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <h4 className="form-head">Comment</h4>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input placeholder="Name" />
      </Form.Item>

      <Form.Item
        name="comment"
        rules={[
          {
            required: true,
            message: "Please input your comment!",
          },
        ]}
      >
        <TextArea rows={2} placeholder="Comment" />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 20,
        }}
      >
        <Button type="primary" htmlType="submit">
          POST
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UserForm;
