import axios from "axios";
import { jwtDecode } from "jwt-decode";

const refreshToken = async () => {
  try {
    const res = await axios.post("/api/v2/auth/refeshtoken", {
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const awtToken = (user, dispatch, stateSuccess) => {
  const newInstacd = axios.create();
  newInstacd.interceptors.request.use(async (config) => {
    const data = refreshToken();
    const decodeToken = jwtDecode(user?.accessToken);
    const date = new Date();
    if (decodeToken.exp > date.getTime() / 1000) {
      const newdata = {
        ...user,
        refreshToken: data,
      };
      dispatch(stateSuccess(newdata));
      config.headers["token"] = "Bearer " + data.accessToken;
    }
    return config;
  });
  return newInstacd;
};
