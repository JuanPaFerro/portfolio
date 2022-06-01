import React from "react";
import Image from "next/image";
import Link from "next/link";
import twitter from "@icons/twitter.svg";
import facebook from "@icons/facebook.svg";
import github from "@icons/github.svg";

const Footer = () => {
  return (
    <footer
      className={`h-12 w-full border-t items-center bg-blue border-t-lines flex justify-between absolute z-10 bottom-0`}
    >
      <div className="pl-4">
        <p className="text-label text-gray">find me in:</p>
      </div>
      <div className="flex h-full text-gray">
        <div className="border-l border-l-lines w-12 h-full flex items-center justify-center">
          <Link href="/">
            <Image src={twitter} alt="twitter icon" />
          </Link>
        </div>
        <div className="border-l border-l-lines w-12 h-full flex items-center justify-center">
          <Link href="/">
            <Image src={facebook} alt="facebook icon" />
          </Link>
        </div>
        <div className="border-l border-l-lines w-12 h-full flex items-center justify-center">
          <Link href="/">
            <Image src={github} alt="github icon" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
