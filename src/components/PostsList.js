import { Carousel, Spin } from "antd";
import { useSelector } from "react-redux";
import "./post-list.scss";

export const PostsList = () => {
  const { apiStatus, data } = useSelector((state) => state.post.posts);
  console.log(data);

  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin />;
  }
  if (apiStatus === "error") {
    return <p>Error Occured</p>;
  }
  return (
    <div className="posts-list">
      {data?.map?.((post) => {
        return (
          <div key={post._id} className="post">
            <b>{post.title} </b>
            <p>{post.content} </p>
            <Carousel>
              {post.imageUrls?.map((image, index) => {
                return <img src={image} alt={image} key={index} />;
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
