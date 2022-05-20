import React from "react";
import Head from "next/head";
import Footer from "@components/Footer/Footer";
import Image from "next/image";
import arrowDown from "@icons/arrow-down.svg";
import arrowRight from "@icons/arrow-right.svg";

const About = () => {
  return (
    <>
      <Head>
        <title>about-me</title>
      </Head>
      <section>
        <div className="flex h-16 w-full pl-4 text-white text-snippets items-center">
          <p>_about-me</p>
        </div>
        <div className="h-auto w-full flex flex-col space-y-1 text-white text-snippets">
          <div className="w-full h-8 px-2 bg-lines flex items-center space-x-1">
            <Image src={arrowRight} alt="arrow pointing right" />
            <p>personal-info</p>
          </div>
          <div className="w-full h-8 px-2 bg-lines flex items-center space-x-1">
            <Image src={arrowRight} alt="arrow pointing right" />
            <p>professional-info</p>
          </div>
          <div className="w-full h-8 px-2 bg-lines flex items-center space-x-1">
            <Image src={arrowRight} alt="arrow pointing right" />
            <p>hobbies</p>
          </div>
          <div className="w-full h-8 px-2 bg-lines flex items-center space-x-1">
            <Image src={arrowRight} alt="arrow pointing right" />
            <p>contacts</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
