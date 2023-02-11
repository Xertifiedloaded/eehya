import React from "react";
import Header from "../components/ui/header/header";
import Footer from "../components/ui/footer/footer";
import { Outlet } from "react-router-dom";
const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
