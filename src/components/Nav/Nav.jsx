import React, { useState } from "react";
import Image from "next/image";
import Menu from "@components/Menu/Menu";
import menu from "@icons/menu.svg";
import close from "@icons/close.svg";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <nav className="h-12 w-full border-b border-b-lines flex justify-between px-4 items-center text-gray text-label">
      <p>juan-pablo-ferro</p>
      <Image
        src={showMenu ? close : menu}
        onClick={() => setShowMenu((prev) => !prev)}
        alt="menu toggler icon"
      />
      {showMenu && <Menu setShowMenu={setShowMenu} />}
    </nav>
  );
};

export default Nav;
