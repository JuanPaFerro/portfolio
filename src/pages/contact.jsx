import ContactInfo from "@components/ContactForm/ContactForm";
import Footer from "@components/Footer/Footer";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>contact</title>
      </Head>
      <section className="pb-12">
        <div className="flex h-16 w-full pl-6 text-white text-snippets items-center">
          <p>_contact-me</p>
        </div>
        <div className="h-auto w-full flex flex-col space-y-1">
          <ContactInfo />
        </div>
      </section>
    </>
  );
};

export default contact;
