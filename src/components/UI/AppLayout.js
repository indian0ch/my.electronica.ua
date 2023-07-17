import HeaderMenu from "../Header/HeaderMenu";
import HeaderDescription from "../Header/HeaderDescription";
import Footer from "../Footer/Footer";

import { Fragment } from "react";
import { Outlet } from "react-router";

function AppLayout(props) {
  return (
    <Fragment>
      <header>
        <HeaderMenu
          fixed="top"
          color="light"
          light="true"
          expand="md"
          container="fluid"
        />
        <HeaderDescription />
      </header>
      <Outlet></Outlet>
      <Footer />
    </Fragment>
  );
}
export default AppLayout;
