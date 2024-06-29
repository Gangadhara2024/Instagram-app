import axios from "axios";

export const Request = async (httpConfig) => {
  // makes an API call
  const token = localStorage.getItem("token");

  try {
    const response = await axios({
      url: httpConfig.url,
      method: httpConfig.method,
      ...(httpConfig.data && { data: httpConfig.data }),
      ...(token && {
        headers: {
          Authorization: `Bearer: ${token}`,
        },
      }),
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.warn("Network error", error);
    return { success: false, data: error?.message };
  }
};
