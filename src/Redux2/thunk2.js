import { Endpoints } from "../Network/Endpoint";
import { Request } from "../Network/Request";
import { TabKeys, updateActionStatus, updateTabKey } from "./Userslice";

export const fetchAllSuggestions = async (dispatch) => {
  dispatch(updateTabKey({ tabId: TabKeys.SUGGESTIONS, apiStatus: "pending" }));
  const { success, data } = await Request({ url: Endpoints.suggestions });
  dispatch(
    updateTabKey({
      tabId: TabKeys.SUGGESTIONS,
      apiStatus: success ? "success" : "error",
      ...(success && { data: data.suggestions }),
    })
  );
};

export const followUser = (userId) => {
  return async (dispatch) => {
    dispatch(updateActionStatus({ apiStatus: "pending" }));
    const { success } = await Request({
      url: Endpoints.follow,
      method: "POST",
      data: {
        userId,
      },
    });
    dispatch(
      updateActionStatus({ apiStatus: success ? "success" : "error", userId })
    );
  };
};
