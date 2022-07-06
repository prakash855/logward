import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="wrapper">
      <DeleteOutlined className="delete" />
      <div className="details">
        <div className="name">Shyam Sundar</div>
        <div className="date">2nd Aug 2022</div>
      </div>
      <div className="caption">This is a comment... nice!</div>
      <div className="action">
        <Button type="link">Reply</Button>
        <Button type="link">Edit</Button>
      </div>
    </div>
  );
};

export default Post;
