import React, { useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Input, Avatar } from "antd";
import "./Header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { apiLogOut } from "../../../Redux/apiRequest";

const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const Header = () => {
  const dispatch = useDispatch();
  const url =
    "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg";

  const AccessTokens = useSelector(
    (state) => state.saveReducer?.auth.login.item?.accessToken
  );
  const decoded = useSelector(
    (state) => state.saveReducer?.get.produc.item?.decoded
  );
  const username = decoded?.username;
  // open setting user HandleDropdowHeaderInfo
  const [isActiveInfo, setActiveInfo] = useState(false);
  const [isHideInfo, setHideInfo] = useState("hide");
  // open search user HandleDropdowHeader search
  const [isActiveSearch, setActiveSearch] = useState(false);
  const [isHideSearch, setHideSearch] = useState("hide");
  // active and hide cart
  // open handle info
  const HandleDropdowHeaderInfo = () => {
    if (isActiveInfo === false) {
      setActiveInfo(true);
      setHideInfo("");
    } else if (isActiveInfo === true) {
      setActiveInfo(false);
      setHideInfo("hide");
    }
  };
  // open handle search
  const HandleSearch = () => {
    if (isActiveSearch === false) {
      setActiveSearch(true);
      setHideSearch("");
    } else if (isActiveSearch === true) {
      setActiveSearch(false);
      setHideSearch("hide");
    }
  };
  // Handle logout
  const HandleClickLogOut = useCallback(() => {
    apiLogOut(dispatch);
    console.log("logout");
  }, [dispatch]);

  return (
    <header className="header-wraper">
      <Container className="header-box">
        <Row xs={2}>
          <Col>
            <div className="logo-header">
              <Link to={"/"}>
                <img src="/logo/logo.png" alt="" />
              </Link>
            </div>
          </Col>
          <Col>
            <div className="left-header-wraper">
              <div className="search-box"></div>
              <i
                class="fa-solid fa-magnifying-glass"
                onClick={HandleSearch}
              ></i>
              {AccessTokens ? (
                <>
                  <i class="fa-solid fa-bell"></i>
                  <i class="fa-solid fa-cart-plus"></i>
                  <div className="info-wrapper">
                    <Avatar
                      className="avatar-header"
                      src={<img src={url} alt="avatar" />}
                      onClick={HandleDropdowHeaderInfo}
                    />
                    <ul className={"dropdown-header " + isHideInfo}>
                      <li>
                        <Link to={"/admin/" + username + "/product"}>
                          <i class="fa-solid fa-user"></i>profile
                        </Link>
                      </li>
                      <li>
                        <Link onClick={HandleClickLogOut}>
                          <i class="fa-solid fa-right-from-bracket"></i>Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                </>
              ) : (
                <div className="auth-box">
                  <Link to={"/register"}>
                    {" "}
                    <i class="fa-solid fa-user-plus"></i>
                    Register
                  </Link>
                  <Link to={"/login"}>
                    <i class="fa-solid fa-right-to-bracket"></i>
                    Login
                  </Link>
                </div>
              )}
            </div>
            <div className={"search-box " + isHideSearch}>
              <Search
                className="search-input"
                placeholder="input search text"
                onSearch={onSearch}
                enterButton
              />
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default React.memo(Header);
