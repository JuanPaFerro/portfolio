import React from "react";
import Image from "next/image";
import twitter from "@icons/twitter.svg";
import facebook from "@icons/facebook.svg";
import github from "@icons/github.svg";

const Footer = () => {
  return (
    <footer className="h-12 w-full border-t items-center border-t-lines flex justify-between absolute bottom-0">
      <div className="pl-4">
        <p className="text-label text-gray">find me in:</p>
      </div>
      <div className="flex h-full text-gray">
        <div className="border-l border-l-lines w-12 h-full flex items-center justify-center">
          <Image src={twitter} />
        </div>
        <div className="border-l border-l-lines w-12 h-full flex items-center justify-center">
          <Image src={facebook} />
        </div>
        <div className="border-l border-l-lines w-12 h-full flex items-center justify-center">
          <Image src={github} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
