import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import Menu from "@components/Menu/Menu";
import menu from "@icons/menu.svg";
import close from "@icons/close.svg";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const router = useRouter();
  return (
    <nav className="h-12 w-full border-b border-b-lines flex justify-between items-center text-gray text-label z-10 bg-blue px-4 lg:px-0">
      <div className="w-72 lg:shrink-0 h-full flex items-center lg:pr-0 lg:pl-4 lg:border-r border-lines">
        <p>juan-pablo-ferro</p>
      </div>

      <div className="hidden lg:flex border-lines w-full justify-between">
        <div className="flex">
          <Link href="/">
            <p
              className={`cursor-pointer h-12 flex items-center border-r border-lines  text-label p-4 border-b border-b-lines ${
                router.pathname === "/" &&
                "border-b-orange border-b-4 box-border text-white"
              }`}
            >
              _hello
            </p>
          </Link>
          <Link href="/about">
            <p
              className={`cursor-pointer h-12 flex items-center border-r border-lines  text-label p-4 border-b border-b-lines ${
                router.pathname === "/about" &&
                "border-b-orange border-b-4 box-border text-white"
              }`}
            >
              _about-me
            </p>
          </Link>
          <Link href="/projects">
            <p
              className={`cursor-pointer h-12 flex items-center border-r border-lines  text-label p-4 border-b border-b-lines ${
                router.pathname === "/projects" &&
                "border-b-orange border-b-4 box-border text-white"
              }`}
            >
              {" "}
              _projects
            </p>
          </Link>
        </div>

        <Link href="/contact">
          <p
            className={`cursor-pointer h-12 flex items-center border-l border-lines text-label px-4 border-b border-b-lines ${
              router.pathname === "/contact" && "text-white"
            }`}
          >
            _contact-me
          </p>
        </Link>
      </div>

      <div className="lg:hidden">
        <Image
          src={showMenu ? close : menu}
          onClick={() => setShowMenu((prev) => !prev)}
          alt="menu toggler icon"
        />
        {showMenu && <Menu setShowMenu={setShowMenu} />}
      </div>
    </nav>
  );
};

export default Nav;
