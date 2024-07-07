import { Tabs } from "antd";
import "./styles/profile.scss";
import Suggestions from "./Suggestions";

const Profile = () => {
  return (
    <div className="tabs-container">
      <Tabs
        items={[
          {
            label: "Followers",
            key: "followers",
            children: <h1>Followers</h1>,
          },
          {
            label: "Following",
            key: "following",
            children: <h1>Following</h1>,
          },
          {
            label: "Suggestions",
            key: "suggestions",
            children: <Suggestions />,
          },
        ]}
      />
    </div>
  );
};

export default Profile;
