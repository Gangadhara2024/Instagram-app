import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSuggestions } from "../Redux2/thunk2";
import { TabKeys } from "../Redux2/Userslice";
import { Button, Spin } from "antd";
import CardList from "./CardList";

const Suggestions = () => {
  const dispatch = useDispatch();
  const { apiStatus, list } = useSelector(
    (state) => state.USERS[TabKeys.SUGGESTIONS]
  );

  const retryButton = () => {
    dispatch(fetchAllSuggestions);
  };

  useEffect(() => {
    retryButton();
  }, []);

  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin size="large" />;
  }
  if (apiStatus === "error") {
    return (
      <Button type="primary" onClick={retryButton}>
        Retry
      </Button>
    );
  }
  return (
    <div>
      {list.map((user) => {
        return (
          <div>
            <CardList user={user} />
          </div>
        );
      })}
    </div>
  );
};

export default Suggestions;
