import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserInfo } from "./UserInfo";
import { PostLists } from "./PostLists";
import "./styles/PostApp.scss";
import Profile from "./Profile";
import { fetchAllPosts, userInfoAPI } from "../Redux/thunk";

const PostApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userInfoAPI);
    dispatch(fetchAllPosts);
  }, []);
  return (
    <div className="home-container">
      <div className="left-box">
        <UserInfo />
        <PostLists />
      </div>
      <div className="right-box">
        <Profile />
      </div>
    </div>
  );
};

export default PostApp;
