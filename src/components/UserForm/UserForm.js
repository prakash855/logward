import { Button, Form, Input } from "antd";
import { v4 as uuidv4 } from "uuid";
import "antd/dist/antd.min.css";
import "./UserForm.css";
import { dateAndTime } from "../../utils";
import { useData } from "../../contexts/user-context";

const { TextArea } = Input;

const UserForm = ({ type, name }) => {
  const { post, setPost, setPosts } = useData();

  const onFinish = (values) => {
    console.log("Success:", values);
    setPosts((posts) => [
      ...posts,
      { id: uuidv4(), ...values, createdAt: dateAndTime(new Date()) },
    ]);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPost({ [name]: value });
  };

  return (
    <Form
      className="wrapper"
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
      <h4 className="form-head">{type}</h4>
      <Form.Item
        name="name"
        rules={[
          {
            required: true,
            message: "Please input your name!",
          },
        ]}
      >
        <Input
          onChange={(e) => onChangeHandler(e)}
          value={post.name}
          name="field"
          placeholder={name}
        />
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
        <TextArea
          onChange={(e) => onChangeHandler(e)}
          value={post.comment}
          name="field"
          rows={2}
          placeholder={type}
        />
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
