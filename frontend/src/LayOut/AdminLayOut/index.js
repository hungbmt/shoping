import SideBar from "./SideBar/SideBar";
import Hearder from "../DefaultLayout/Header/Hearder";

const AdminLayOut = ({ children }) => {
  return (
    <>
      <Hearder />
      <SideBar />
      {children}
    </>
  );
};

export default AdminLayOut;
