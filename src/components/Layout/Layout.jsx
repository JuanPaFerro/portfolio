import React from "react";
import Nav from "@components/Nav/Nav";

const Layout = ({ children }) => {
  return (
    <div className="h-screen w-full p-4 bg-black font-monospace">
      <div className="h-full w-full border border-lines rounded-lg bg-blue relative">
        <Nav />
        {children}
      </div>
    </div>
  );
};

export default Layout;
