import { Carousel, Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import "./post-list.scss";

export const PostLists = () => {
  const { apiStatus, data } = useSelector((state) => state.post.posts);

  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin />;
  }

  if (apiStatus === "error") {
    return <p>Error occured</p>;
  }
  return (
    <div className="posts-list">
      {data?.map?.((post) => {
        return (
          <div id={post._id} className="post">
            <b>{post.title} </b>
            <p>{post.content} </p>
            <Carousel>
              {post.imageUrls.map((image, index) => {
                return <img src={image} key={index} alt={image} />;
              })}
            </Carousel>
            <div className="footer">
              <div>
                <span className="material-icons">favorite</span>
                <span>{post.likesCount} </span>
              </div>
              <div>
                <span className="material-icons">comment</span>
                <span>{post.commentsCount} </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
