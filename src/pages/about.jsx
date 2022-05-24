import React from "react";
import Head from "next/head";
import Footer from "@components/Footer/Footer";
import PersonalInfo from "@components/PersonalInfo/PersonalInfo";
import ProfessionalInfo from "@components/ProfessionalInfo/ProfessionalInfo";
import HobbiesInfo from "@components/HobbiesInfo/HobbiesInfo";
import ContactsInfo from "@components/ContactsInfo/ContactsInfo";

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
          <PersonalInfo />
          <ProfessionalInfo />
          <HobbiesInfo />
          <ContactsInfo />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
