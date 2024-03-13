import axios from "axios";
import {
  logOutFault,
  logOutStart,
  logOutSuccess,
  loginFault,
  loginStart,
  loginSuccess,
  registerFault,
  registerStart,
  registerSuccess,
} from "./authSlide";
import { createFmStart, createFmSuccess, createFmfault } from "./postSlide";
import { producFault, producStart, producSuccess } from "./getSlide";
import { uptataStart, updataSuccess, updatafault } from "./putSlide";
import {
  updataImgFault,
  updataImgStart,
  updataImgSucess,
} from "./putProductImgSlice";
import {
  updataSizeFault,
  updataSizeStart,
  updataSizeSuccess,
} from "./putProductSizeSlice";
import {
  ImgProductFault,
  ImgProductStart,
  ImgProductSuccess,
} from "./getImgProductSlide";
import { subpageFault, subpageStart, subpageSuccess } from "./subpageSlide";
// import { delay } from "../Config/delay";
import {
  addToCartFault,
  addToCartStart,
  addTocartSuccess,
} from "./addToCartSlice";

// api register
export const registerApi = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await axios.post("/api/v2/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFault(error));
  }
};

// function delay(time) {
//   return new Promise((resolve) => setTimeout(resolve, time));
// }

// api login

export const apiLogin = async (dispatch, user, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("/api/v2/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFault());
  }
};

export const createProduc = async (
  dispatch,
  data,
  accessToken,
  navigate,
  username,
  itemid
) => {
  dispatch(createFmStart());
  try {
    const res = await axios.post("/api/v1/create", data, {
      headers: {
        "Content-Type": "application/json",
        token: `Bearer ${accessToken}`,
      },
    });
    dispatch(createFmSuccess(res.data));
  } catch (error) {
    dispatch(createFmfault(error));
  }
};

export const getAllItem = async (dispatch) => {
  dispatch(producStart());
  try {
    const res = await axios.get("/api/v4/all");
    dispatch(producSuccess(res.data));
  } catch (error) {
    dispatch(producFault());
  }
};

export const updateData = async (dispatch, producId, data, accessToken) => {
  dispatch(uptataStart());
  try {
    const resp = await axios.put("/api/v1/update/" + producId, data, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(updataSuccess(resp.data));
  } catch (error) {
    console.log(error);
    dispatch(updatafault());
  }
};

export const ApiUpdataProduct = async (
  dispatch,
  productId,
  data,
  accessToken
) => {
  dispatch(updataImgStart());
  try {
    const resp = await axios.put("/api/v1/updata-product/" + productId, data, {
      headers: {
        enctype: "multipart/form-data",
        token: `Bearer ${accessToken}`,
      },
    });
    dispatch(updataImgSucess(resp.data));
  } catch (error) {
    dispatch(updataImgFault(error));
  }
};

export const apiUpdateSize = async (
  dispatch,
  productId,
  idImg,
  data,
  accessToken
) => {
  dispatch(updataSizeStart());
  try {
    const resp = await axios.put(
      "/api/v1/size/" + productId + "/" + idImg,
      data,
      {
        headers: {
          enctype: "multipart/form-data",
          token: `Bearer ${accessToken}`,
        },
      }
    );
    dispatch(updataSizeSuccess(resp.data));
  } catch (error) {
    dispatch(updataSizeFault(error));
  }
};

// api get ImgProduct /api/v1/size/productId/sampleID/getAll
export const ApiGetImgProduct = async (
  dispatch,
  productID,
  sampleId,
  accessToken
) => {
  dispatch(ImgProductStart());
  try {
    const resp = await axios.get(
      "/api/v1/size/" + productID + "/" + sampleId + "/getAll",
      {
        headers: {
          token: `Bearer ${accessToken}`,
        },
      }
    );
    dispatch(ImgProductSuccess(resp.data));
  } catch (error) {
    dispatch(ImgProductFault(error));
    console.log(error);
  }
};

// api subpage :slug_2/:slug_1/:slug_3/:sttProduct"

export const apiGetSubpage = async (
  dispatch,
  slug2,
  slug1,
  slug3,
  stt,
  codeProduct
) => {
  let url = "";
  if (codeProduct) {
    url +=
      "/api/v4/subpage/" +
      slug2 +
      "/" +
      slug1 +
      "/" +
      slug3 +
      "/" +
      stt +
      "/" +
      codeProduct;
  } else if (!codeProduct) {
    url += "/api/v4/subpage/" + slug2 + "/" + slug1 + "/" + slug3 + "/" + stt;
  }
  dispatch(subpageStart());
  try {
    const resp = await axios.get(url);

    dispatch(subpageSuccess(resp.data));
  } catch (error) {
    dispatch(subpageFault(error));
  }
};

export const apiAddToCart = async (
  dispatch,
  productId,
  formData,
  accessToken
) => {
  dispatch(addToCartStart());
  try {
    const resp = await axios.post("/api/v3/add-to-cart/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Content-type": "application/x-www-form-urlencoded",
        token: `Bearer ${accessToken}`,
      },
    });
    console.log(resp.data);
    dispatch(addTocartSuccess(resp.data));
  } catch (error) {
    console.log(error);
    dispatch(addToCartFault(error));
  }
};

export const apiLogOut = async (dispatch) => {
  dispatch(logOutStart());
  try {
    const req = await axios.post("/api/v2/auth/logout");
    console.log(req);
    dispatch(logOutSuccess());
  } catch (error) {
    dispatch(logOutFault(error));
    console.log(error);
  }
};
