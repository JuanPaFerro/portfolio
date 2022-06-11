import React from "react";
import Link from "next/link";
import Footer from "@components/Footer/Footer";

const Menu = ({ setShowMenu }) => {
  const closeMenu = () => {
    setTimeout(() => setShowMenu(false), 100);
  };

  return (
    <section className="absolute right-0 top-12 flex flex-col w-full h-[calc(100%_-_3rem)] bg-blue z-10 rounded-b-lg">
      <div className="cursor-pointer" onClick={closeMenu}>
        <Link href="/">
          <p className="h-12 flex items-center text-white text-label pl-4 border-b border-b-lines">
            _hello
          </p>
        </Link>
        <Link href="/about">
          <p className="h-12 flex items-center text-white text-label pl-4 border-b border-b-lines">
            _about-me
          </p>
        </Link>
        <Link href="/projects">
          <p className="h-12 flex items-center text-white text-label pl-4 border-b border-b-lines">
            _projects
          </p>
        </Link>
        <Link href="/contact">
          <p className="h-12 flex items-center text-white text-label pl-4 border-b border-b-lines">
            _contact-me
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Menu;
