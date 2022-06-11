import React, { useState, useContext, useRef } from "react";
import { ArrowIcon } from "@components/IconsComponents/ArrowIcon";
import LinkIcon from "@components/IconsComponents/LinkIcon";
import Link from "next/link";
import { Context } from "@context/Context";

const ContactInfo = () => {
  const [showContacts, setShowContacts] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const refName = useRef();
  const refEmail = useRef();
  const refMessage = useRef();
  const { contactLinks } = useContext(Context);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      name: refName.current.value,
      email: refEmail.current.value,
      message: refMessage.current.value,
    };
    setShowForm(false);
    refName.current.value = "";
    refEmail.current.value = "";
    refMessage.current.value = "";
    console.log(data);
  };

  return (
    <div className="mb-8 space-y-8">
      <div
        className="w-full h-8 px-4 bg-lines flex items-center space-x-1 cursor-pointer text-white"
        onClick={() => setShowContacts((prev) => !prev)}
      >
        <ArrowIcon isActive={showContacts} />
        <p>contacts</p>
      </div>
      {showContacts && (
        <div className="flex flex-col px-6 space-y-2">
          {contactLinks.map((link, index) => (
            <Link href={link.link} key={`${index}-${link.name}`}>
              <div className="flex py-1 space-x-2 text-label text-gray cursor-pointer">
                <LinkIcon />
                <p>{link.name}</p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {showForm ? (
        <form
          className="w-full px-6 text-gray text-label space-y-3"
          onSubmit={(event) => handleSubmit(event)}
        >
          <div className="flex flex-col space-y-2">
            <label htmlFor="name">_name:</label>
            <input
              ref={refName}
              type="text"
              name="name"
              className="h-10 px-2 bg-darker-blue border border-lines rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">_email:</label>
            <input
              ref={refEmail}
              type="email"
              name="email"
              className="h-10 px-2 bg-darker-blue border border-lines rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-2 pb-2">
            <label htmlFor="message">_message</label>
            <textarea
              ref={refMessage}
              name="message"
              className="h-36 p-2 bg-darker-blue border border-lines rounded-lg"
            />
          </div>

          <button
            type="submit"
            className="h-9 w-36 text-snippets text-white flex items-center justify-center rounded-lg cursor-pointer bg-[#1C2B3A] hover:bg-[#263B50]"
          >
            submit-message
          </button>
        </form>
      ) : (
        <div className="flex flex-col w-full px-6 text-center items-center text-gray  space-y-3">
          <p className="text-white text-[24px]">Thank You 🤘</p>
          <p className="text-bodytext pb-3">
            Your message has been accepted. You will recieve answer really soon!
          </p>
          <button
            type="button"
            onClick={() => setShowForm(true)}
            className="h-9 w-40 text-snippets text-white flex items-center justify-center rounded-lg cursor-pointer bg-[#1C2B3A] hover:bg-[#263B50]"
          >
            send-new-message
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;
