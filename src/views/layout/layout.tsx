import React from "react";
import Sidebar from "./sidebar";
import Main from "./main";

const Layout = () => {
  return (
    <div className="h-screen flex pt-8 pb-12">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Layout;
