import { Button, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";
import CardList from "./CardList";
import { fetchAllFollowing } from "../Redux2/thunk2";
import { TabKeys } from "../Redux2/Userslice";
import { useEffect } from "react";

const Following = () => {
  const dispatch = useDispatch();
  const { apiStatus, list } = useSelector(
    (state) => state.USERS[TabKeys.FOLLOWING]
  );

  const RetryFollowing = () => {
    dispatch(fetchAllFollowing);
  };

  useEffect(() => {
    RetryFollowing();
  }, []);

  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin size="large" />;
  }
  if (apiStatus === "error") {
    return (
      <Button type="primary" onClick={RetryFollowing}>
        Retry
      </Button>
    );
  }
  return (
    <div>
      {list.map((user) => (
        <CardList user={user} key={user._id} tabId={TabKeys.FOLLOWING} />
      ))}
    </div>
  );
};

export default Following;
