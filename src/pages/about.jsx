import React, { useContext } from "react";
import { Context } from "@context/Context";
import Head from "next/head";
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
      <section className="mb-16 lg:flex lg:m-0 lg:h-[87vh]">
        <div className="flex h-16 w-full pl-6 text-white text-snippets items-center lg:hidden">
          <p>_about-me</p>
        </div>
        <div className="w-full flex flex-col space-y-1 text-white text-label lg:space-y-0 lg:w-72 lg:shrink-0 lg:border-r lg:border-r-lines lg:h-full">
          <PersonalInfo />
          <ProfessionalInfo />
          <HobbiesInfo />
          <ContactsInfo />
        </div>

        <div className="pt-8 space-y-4 text-gray px-6 lg:px-0 lg:pt-0 lg:h-full lg:pb-20 lg:overflow-auto lg:border-r border-lines">
          <div className="hidden lg:flex items-center h-8 border-b border-lines">
            <div className="flex space-x-8 items-center pl-4 pr-2 border-r border-lines h-full">
              <p>{aboutInfo.root}</p>
              <p className="text-[12px] font-medium">x</p>
            </div>
          </div>
          <div className="flex text-label space-x-3 lg:px-12">
            <p className="text-white ">{`// ${aboutInfo.root}`}</p>
            <p>{`/ ${aboutInfo.file}`}</p>
          </div>
          <div className="lg:px-12">{aboutInfo.content.trim().split('.').map((el, index)=> <p key={index}>{`${el}.`}</p>)}</div>
        </div>

        <div className="lg:pt-0 lg:px-0 lg:w-2/5 lg:shrink-0 lg:h-full lg:pb-20 lg:overflow-y-auto ">
          <div className="hidden lg:flex h-8 border-b border-lines"></div>
          <div className="px-6 pt-6 space-y-4 text-white text-label">
            <p>{`//`} Code snippet showcase:</p>
            <CodeSnippet />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
