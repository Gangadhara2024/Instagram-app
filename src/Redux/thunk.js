import { Endpoints } from "../Network/Endpoint";
import { Request } from "../Network/Request";
import {
  AddPost,
  updatePostInfo,
  updatePostStatus,
  updateUserInfo,
} from "./Postslice";

export const userInfoAPI = async (dispatch) => {
  dispatch(updateUserInfo({ apiStatus: "pending" }));
  const httpConfig = {
    url: Endpoints.userInfo,
  };
  const { success, data } = await Request(httpConfig);
  dispatch(updateUserInfo({ apiStatus: success ? "success" : "error", data }));
};

export const fetchAllPosts = async (dispatch) => {
  dispatch(updatePostInfo({ apiStatus: "pending" }));
  const httpConfig = {
    url: Endpoints.posts,
  };
  const { success, data } = await Request(httpConfig);
  dispatch(updatePostInfo({ apiStatus: success ? "success" : "error", data }));
};

export const createPost = (postInfo) => {
  return async (dispatch) => {
    dispatch(updatePostStatus("pending"));
    const httpConfig = {
      url: Endpoints.createPost,
      method: "POST",
      data: postInfo,
    };
    const { success, data } = await Request(httpConfig);
    if (success) {
      dispatch(AddPost(data.post));
    }
    dispatch(updatePostStatus(success ? "success" : "error"));
  };
};
