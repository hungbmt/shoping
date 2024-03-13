import SubPageLayOut from "../LayOut/SubPageLayOut";
import Subpage from "../Page/Subpage/SubPage";
import FromCreate from "../Page/PageAdmin/FormCreate/FromCreate";
import Login from "../Page/auth/Login/Login";
import Register from "../Page/auth/Register/Register";
import home from "./../Page/Home/Home";
import FormProduct from "../Page/PageAdmin/FormProduct/FormProduct";
import UpdataLoyOut from "../LayOut/UpdataLayout";
import FormUpdataImg from "../Page/PageAdmin/FormUpdata/FormUpdataImg/FormUpdataImg";
import FormUpdataSize from "../Page/PageAdmin/FormUpdata/FormUpdataSize/FormUpdataSize";
import ProFile from "../Page/PageAdmin/ProFile/ProFile";

const PublicRouter = [
  { patch: "/", component: home },
  // { patch: "/register", component: Register },
  // { patch: "/login", component: Login },
  {
    patch: "/:slug_2/:slug_1/:slug_3/:sttProduct/:codeProduct?",
    component: Subpage,
    Layout: SubPageLayOut,
  },
];

const authention = [
  { patch: "/register", component: Register },
  { patch: "/login", component: Login },
];

const AuthenRouter = [
  {
    patch: `${process.env.REACT_APP_ADMIN}:username/create`,
    component: FromCreate,
  },
  {
    patch: `${process.env.REACT_APP_ADMIN}:username/product`,
    component: FormProduct,
  },
  {
    patch: `${process.env.REACT_APP_ADMIN}:username/profile`,
    component: ProFile,
  },
  {
    patch: `${process.env.REACT_APP_ADMIN}:username/member`,
    component: FormProduct,
  },
  {
    patch: "/admin/:username/:id/update",
    component: FormUpdataImg,
    Layout: UpdataLoyOut,
  },
  {
    patch: "/admin/:username/:id/:prouctId/update",
    component: FormUpdataSize,
    Layout: UpdataLoyOut,
  },
];

const autUser = [
  {
    patch: "/user/:username/profile",
    component: ProFile,
  },
];

export { PublicRouter, AuthenRouter, authention, autUser };
