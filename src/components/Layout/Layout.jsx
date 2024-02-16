import React from "react";
import Nav from "@components/Nav/Nav";
import Footer from "@components/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="h-screen w-full p-4 bg-black font-monospace overflow-auto">
        <div className="w-full border border-lines rounded-lg bg-blue relative overflow-scroll">
          <Nav />
          {children}
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Layout;
