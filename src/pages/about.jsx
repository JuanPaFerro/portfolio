import React from "react";
import Head from "next/head";
import Footer from "@components/Footer/Footer";
import PersonalInfo from "@components/PersonalInfo/PersonalInfo";
import ProfessionalInfo from "@components/ProfessionalInfo/ProfessionalInfo";
import HobbiesInfo from "@components/HobbiesInfo/HobbiesInfo";
import ContactsInfo from "@components/ContactsInfo/ContactsInfo";

const About = () => {
  const data = {
    root: "personal-info",
    folder: "bio",
    content: `I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.
  `,
  };
  return (
    <>
      <Head>
        <title>about-me</title>
      </Head>
      <section className="pb-12">
        <div className="flex h-16 w-full pl-4 text-white text-snippets items-center">
          <p>_about-me</p>
        </div>
        <div className="h-auto w-full flex flex-col space-y-1 text-white text-snippets">
          <PersonalInfo />
          <ProfessionalInfo />
          <HobbiesInfo />
          <ContactsInfo />
        </div>
        <div className="pt-8 space-y-4 text-gray px-4 ">
          <div className="flex text-label space-x-3">
            <p className="text-white ">{`// ${data.root}`}</p>
            <p>{`/ ${data.folder}`}</p>
          </div>
          <p>{data.content}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
