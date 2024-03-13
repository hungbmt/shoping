import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Home from "./Page/Home/Home";
import { AuthenRouter, PublicRouter, authention } from "./Router";
import DefaultLayOut from "./LayOut/DefaultLayout";
import AdminLayOut from "./LayOut/AdminLayOut";
import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Responsive.css";
import { useSelector } from "react-redux";

function App() {
  const aut = useSelector((state) => state.saveReducer?.get?.produc?.item);
  const accessToken = aut?.AccessTokens;
  return (
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
          <Routes>
            {authention.map((itemauths, inx) => {
              let Layouts = AdminLayOut;
              let Pages = itemauths.component;
              if (itemauths.Layout) {
                Layouts = itemauths.Layout;
              } else if (itemauths.Layout === null) {
                Layouts = Fragment;
              }
              return (
                <Route
                  key={inx}
                  path={itemauths.patch}
                  element={
                    accessToken ? (
                      <Navigate to="/" />
                    ) : (
                      <Layouts>
                        <Pages />
                      </Layouts>
                    )
                  }
                />
              );
            })}
            {PublicRouter.map((item, ixs) => {
              let Page = item.component;
              let Layouts = DefaultLayOut;
              let path = item.patch;
              if (item.Layout) {
                Layouts = item.Layout;
              } else if (item.Layout === null) {
                Layouts = Fragment;
              }
              return (
                <Route
                  key={ixs}
                  path={path}
                  element={
                    <Layouts>
                      <Page />
                    </Layouts>
                  }
                />
              );
            })}

            {AuthenRouter.map((itemAt, ixt) => {
              let Layouts = AdminLayOut;
              let Pages = itemAt.component;
              const patch = itemAt.patch;
              if (itemAt.Layout) {
                Layouts = itemAt.Layout;
              } else if (itemAt.Layout === null) {
                Layouts = Fragment;
              }
              return (
                <Route
                  key={ixt}
                  path={patch}
                  element={
                    <Layouts>
                      <Pages />
                    </Layouts>
                  }
                />
              );
            })}
          </Routes>
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
