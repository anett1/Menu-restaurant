import React, { Suspense } from "react";
import HeaderMenuItems from "../components/HeaderMenuItems";
import Preloader from "../components/Preloader";
//import MenuItems from "../components/MenuItems";
import "../styles/menuView.scss";

const MenuItems = React.lazy(() => import("../components/MenuItems"));

function MenuView() {
  return (
    <>
      <HeaderMenuItems MenuView />
      <Suspense fallback={<Preloader />}>
        <MenuItems />
      </Suspense>
    </>
  );
}

export default MenuView;
