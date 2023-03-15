import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar
          className="post__avatar"
          src="/static/images/avatar/1.jpg"
          alt="Prudhvi"
        />
        <h3>Username</h3>
      </div>

      <img
        className="post__image"
        src="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
        alt=""
      />

      <h4 className="post__text">
        <strong>Prudhvidhar</strong> Building instagram clone using react
      </h4>
    </div>
  );
}

export default Post;
