import { useDispatch, useSelector } from "react-redux";
import "./styles/card-list.scss";
import { Button } from "antd";
import { followUser } from "../Redux2/thunk2";
import { TabKeys } from "../Redux2/Userslice";

const CardList = ({ user, tabId }) => {
  const apiStatus = useSelector((state) => state.USERS.actions[user._id]);
  const dispatch = useDispatch();
  const FollowBtn = () => {
    dispatch(followUser(user._id));
  };
  return (
    <div className="user-card">
      <div className="left">
        <p>
          {user.gender === "MALE" ? "HE/HIM" : "SHE/HER"} <b>{user.name} </b>
        </p>
        <span>{user.email} </span>
        <span>{user.city} </span>
      </div>
      <Button
        loading={apiStatus === "pending"}
        className="btn"
        onClick={FollowBtn}
      >
        {user.following
          ? "Unfollow"
          : tabId === TabKeys.FOLLOWERS
          ? "FollowBack"
          : "Follow"}
      </Button>
    </div>
  );
};

export default CardList;
