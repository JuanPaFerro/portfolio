import ContactForm from "@components/ContactForm/ContactForm";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>contact</title>
      </Head>
      <section className="pb-12 lg:h-[87vh]">
        <div className="lg:hidden flex h-16 w-full pl-6 text-white text-snippets items-center">
          <p>_contact-me</p>
        </div>
        <ContactForm />
      </section>
    </>
  );
};

export default contact;
