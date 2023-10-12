import React from "react";
import Header from "./headers/header";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
