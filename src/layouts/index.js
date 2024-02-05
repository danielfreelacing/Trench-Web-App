import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

const Layout = () => {
  return (
    <div className="min-h-screen h-full bg-black">
      <Header />
      <main className="px-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
