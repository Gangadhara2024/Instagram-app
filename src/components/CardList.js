import { useDispatch, useSelector } from "react-redux";
import "./card-list.scss";
import { Button } from "antd";

const CardList = ({ user }) => {
  const apiStatus = useSelector((state) => state.USERS.actions[user._id]);
  const dispatch = useDispatch();
  const FollowBtn = () => {
    dispatch();
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
        loading={apiStatus === "success"}
        className="btn"
        onClick={FollowBtn}
        disabled={apiStatus === "success"}
      >
        {apiStatus === "success" ? "Following" : "Follow"}
      </Button>
    </div>
  );
};

export default CardList;
