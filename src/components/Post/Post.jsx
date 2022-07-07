import { DeleteOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useState } from "react";
import { useData } from "../../contexts/user-context";
import UserForm from "../UserForm/UserForm";
import "./Post.css";

const Post = ({ post }) => {
  const { id, name, comment, createdAt } = post;
  const { posts, setPosts, showReply, setShoeReply } = useData();

  const deleteHandler = (id) => {
    const nonRemovedItem = posts.filter((eachPost) => eachPost.id !== id);
    setPosts(nonRemovedItem);
  };

  return (
    <>
      <div className="wrapper">
        <DeleteOutlined onClick={() => deleteHandler(id)} className="delete" />
        <div className="details">
          <h3 className="name">{name}</h3>
          <div className="date">{createdAt}</div>
        </div>
        <div className="caption">{comment}</div>
        <div className="action">
          <Button onClick={() => setShoeReply(true)} type="link">
            Reply
          </Button>
          <Button type="link">Edit</Button>
        </div>
      </div>
      {showReply && <UserForm type="Reply" name="Name" showReply={showReply} />}
    </>
  );
};

export default Post;
