import React, { useContext } from "react";
import { Context } from "@context/Context";
import Head from "next/head";
import Footer from "@components/Footer/Footer";
import PersonalInfo from "@components/PersonalInfo/PersonalInfo";
import ProfessionalInfo from "@components/ProfessionalInfo/ProfessionalInfo";
import HobbiesInfo from "@components/HobbiesInfo/HobbiesInfo";
import ContactsInfo from "@components/ContactsInfo/ContactsInfo";
import CodeSnippet from "@components/CodeSnippet/CodeSnippet";

const About = () => {
  const { aboutInfo } = useContext(Context);
  return (
    <>
      <Head>
        <title>about-me</title>
      </Head>
      <section className="mb-16">
        <div className="flex h-16 w-full pl-6 text-white text-snippets items-center">
          <p>_about-me</p>
        </div>
        <div className="h-auto w-full flex flex-col space-y-1 text-white text-snippets">
          <PersonalInfo />
          <ProfessionalInfo />
          <HobbiesInfo />
          <ContactsInfo />
        </div>
        <div className="pt-8 space-y-4 text-gray px-6 ">
          <div className="flex text-label space-x-3">
            <p className="text-white ">{`// ${aboutInfo.root}`}</p>
            <p>{`/ ${aboutInfo.file}`}</p>
          </div>
          <p>{aboutInfo.content}</p>
        </div>
        <div className="px-6 pt-6 space-y-4 text-white text-label">
          <p>{`//`} Code snippet showcase:</p>
          <CodeSnippet />
        </div>
      </section>
    </>
  );
};

export default About;
