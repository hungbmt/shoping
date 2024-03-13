import { useState } from "react";
import "./SideBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const SideBar = () => {
  const item = useSelector((state) => state.saveReducer.get.produc.item);
  const decodeds = item?.decoded;
  const [scronBar, setCronbar] = useState(false);
  const [width, setWidth] = useState("inActive");
  const [hide, setHide] = useState("hide");
  const [iconBtn, setIconBtn] = useState("fa-solid fa-chevron-right");
  const HandleClick = () => {
    setCronbar(true);
    if (scronBar === true) {
      setWidth("Active");
      setCronbar("false");
      setHide("");
      setIconBtn("fa-solid fa-chevron-left");
    } else if (scronBar === "false") {
      setWidth("inActive");
      setHide("hide");
      setIconBtn("fa-solid fa-chevron-right");
    }
  };
  return (
    <>
      <div className={`sideBar-wraper ${width}`}>
        <button className="btn-sidebar" onClick={HandleClick}>
          <i className={iconBtn}></i>
        </button>
        <ul>
          <li>
            <i className="fa-solid fa-chart-line"></i>
            <Link className={`${hide}`} to={"/admin/hung/DashBoar"}>
              {/* <span className={`${hide}`}> Product</span> */}
              DashBoar
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-chart-line"></i>
            <Link className={`${hide}`} to={"/admin/hung/product"}>
              {/* <span className={`${hide}`}> Product</span> */}
              Product
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <Link
              className={`${hide}`}
              to={`${
                process.env.REACT_APP_ADMIN + decodeds?.username + "/create/"
              }`}
            >
              add product
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            <Link
              className={`${hide}`}
              to={`${
                process.env.REACT_APP_ADMIN + decodeds?.username + "/update"
              }`}
            >
              {/* <span className={`${hide}`}> Product</span> */}
              Update
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-users"></i>
            <Link
              className={`${hide}`}
              to={`${
                process.env.REACT_APP_ADMIN + decodeds?.username + "/member"
              }`}
            >
              {/* <span className={`${hide}`}> Product</span> */}
              MemBer
            </Link>
          </li>
          <li>
            <i className="fa-solid fa-user"></i>
            <Link
              className={`${hide}`}
              to={`${
                process.env.REACT_APP_ADMIN + decodeds?.username + "/profile"
              }`}
            >
              ProFile
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
