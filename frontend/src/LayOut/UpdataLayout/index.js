import { Container } from "react-bootstrap";
import SideBar from "../AdminLayOut/SideBar/SideBar";
import Hearder from "../DefaultLayout/Header/Hearder";
import UpdataTop from "./updataTop";

const UpdataLoyOut = ({ children }) => {
  return (
    <>
      <Hearder />
      <SideBar />
      <Container>
        <div className="from-admin-wraper">
          <UpdataTop />
          {children}
        </div>
      </Container>
    </>
  );
};

export default UpdataLoyOut;
