import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import twitter from "@icons/twitter.svg";
import linkedin from "@icons/linkedin.svg";
import github from "@icons/github.svg";

const Footer = () => {
  const router = useRouter();
  return (
    <footer
      className={`h-12 w-full border-t items-center bg-blue border-t-lines flex justify-between lg:justify-start z-10 lg:absolute bottom-0`}
    >
      <div className="pl-4 lg:flex lg:border-r lg:border-lines lg:h-full lg:items-center lg:w-40">
        <p className="text-label text-gray">find me in:</p>
      </div>
      <div className="flex h-full text-gray lg:w-full lg:justify-between">
        <div className="flex lg:border-r border-lines">
          <div className="cursor-pointer border-l lg:border-l-0 border-l-lines w-12 h-full flex items-center justify-center">
            <a href="https://www.twitter.com/jf3rr0">
              <Image src={twitter} alt="twitter icon" />
            </a>
          </div>
          <div className="border-l border-l-lines w-12 h-full flex items-center justify-center">
            <a href="https://www.linkedin.com/in/juan-pablo-ferro">
              <Image src={linkedin} alt="linkedin icon" />
            </a>
          </div>
        </div>
        <div className="border-l border-l-lines w-12 h-full flex items-center justify-center lg:w-48 cursor-pointer">
          <p className="hidden pr-3 lg:block">@JuanPaFerro</p>
          <a href="https://github.com/JuanPaFerro">
            <Image src={github} alt="github icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
