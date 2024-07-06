import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPosts, userInfoAPI } from "../Redux/thunk";
import { UserInfo } from "./UserInfo";
import { PostLists } from "./PostLists";
import "./maindiv.scss";

const PostApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userInfoAPI);
    dispatch(fetchAllPosts);
  }, []);
  return (
    <div className="maindiv">
      <div className="div1">
        <UserInfo />
        <PostLists />
      </div>
    </div>
  );
};

export default PostApp;
