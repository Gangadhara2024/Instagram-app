import { Endpoint } from "../Network/Endpoint";
import { Request } from "../Network/Request";
import { updatePostInfo, updateUserInfo } from "./postSlice";

export const fetchUserInfo = async (dispatch) => {
  dispatch(updateUserInfo({ apiStatus: "pending" }));
  const httpConfig = {
    url: Endpoint.userInfo,
  };
  const { success, data } = await Request(httpConfig);
  dispatch(updateUserInfo({ apiStatus: success ? "success" : "error", data }));
};

export const fetchAllPosts = async (dispatch) => {
  dispatch(updatePostInfo({ apiStatus: "pending" }));
  const httpConfig = {
    url: Endpoint.posts,
  };
  const { success, data } = await Request(httpConfig);
  dispatch(updatePostInfo({ apiStatus: success ? "success" : "error", data }));
};

export const createPost = (postInfo) => {
  return async function (dispatch) {
    const httpConfig = {
      url: Endpoint.createPost,
      method: "POST",
      data: postInfo,
    };
    const { success, data } = await Request(httpConfig);
  };
};
