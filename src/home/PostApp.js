import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAllPosts, fetchUserInfo } from "../Redux/thunk";
import { UserInfo } from "../components/UserInfo";
import { PostsList } from "../components/PostsList";

export const PostApp = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserInfo);
    dispatch(fetchAllPosts);
  }, []);
  return (
    <div>
      <UserInfo />
      <PostsList />
    </div>
  );
};
