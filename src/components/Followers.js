import { Button, Spin } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllFollowers } from "../Redux2/thunk2";
import CardList from "./CardList";
import { TabKeys } from "../Redux2/Userslice";

const Followers = () => {
  const dispatch = useDispatch();
  const { apiStatus, list } = useSelector(
    (state) => state.USERS[TabKeys.FOLLOWERS]
  );

  const RetryFollowers = () => {
    dispatch(fetchAllFollowers);
  };

  useEffect(() => {
    RetryFollowers();
  }, []);

  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin size="large" />;
  }
  if (apiStatus === "error") {
    return (
      <Button type="primary" onClick={RetryFollowers}>
        Retry
      </Button>
    );
  }
  return (
    <div>
      {list.map((user) => (
        <CardList user={user} key={user._id} tabId={TabKeys.FOLLOWERS} />
      ))}
    </div>
  );
};

export default Followers;
