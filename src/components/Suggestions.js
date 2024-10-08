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

  const RetrySuggestions = () => {
    dispatch(fetchAllSuggestions);
  };

  useEffect(() => {
    RetrySuggestions();
  }, []);

  if (apiStatus === "init" || apiStatus === "pending") {
    return <Spin size="large" />;
  }
  if (apiStatus === "error") {
    return (
      <Button type="primary" onClick={RetrySuggestions}>
        Retry
      </Button>
    );
  }
  return (
    <div>
      {list.map((user) => (
        <CardList user={user} key={user._id} tabId={TabKeys.SUGGESTIONS} />
      ))}
    </div>
  );
};

export default Suggestions;
