import React, { useState, useContext, useRef, useEffect } from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { ArrowIcon } from "@components/IconsComponents/ArrowIcon";
import LinkIcon from "@components/IconsComponents/LinkIcon";
import Link from "next/link";
import { Context } from "@context/Context";

const ContactForm = () => {
  const [showContacts, setShowContacts] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { contactLinks } = useContext(Context);
  const [code, setCode] =
    useState(`const button = document.querySelector('#sendBtn');

  const message = {
    name: "${name}",
    email: "${email}",
    message: "${message}",
    date: ""
  }

  button.addEventListener('click', () => {
    form.send(message);
  })`);

  useEffect(() => {
    const newCode = `const button = document.querySelector('#sendBtn');

    const message = {
      name: "${name}",
      email: "${email}",
      message: "${message
        .split(" ")
        .map((word, index) => ((index + 1) % 6 === 0 ? word + "\n" : word))
        .join(" ")}",
      date: "${Date().split(" ").slice(1,4).join(" ")}"
    }

    button.addEventListener('click', () => {
      form.send(message);
    })`;
    setCode(newCode);
  }, [name, email, message]);
  useEffect(() => {
    if (showForm) {
      setName("");
      setEmail("");
      setMessage("");
    }
  }, [showForm]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name,
      email,
      message,
    };
    setShowForm(false);
    console.log(data);
  };

  return (
    <div className="h-auto w-full flex flex-col mb-8 space-y-8 lg:flex-row lg:mb-0 lg:space-y-0 lg:h-full">
      <div className="lg:w-72 lg:shrink-0 lg:border-r lg:border-r-lines lg:h-full lg:space-y-4">
        <div
          className="w-full h-8 px-4 bg-lines flex items-center space-x-1 cursor-pointer text-white lg:bg-blue lg:border-b lg:border-lines"
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
      </div>
      <div className="lg:w-full lg:flex lg:h-full lg:flex-wrap">
        <div className="hidden lg:inline-block w-full h-8 shrink-0 border-b border-lines">
          <div className="flex text-gray items-center space-x-4 px-4 border-r border-lines h-full w-fit">
            <p>contacts</p>
            <p className="font-medium text-[12px]">x</p>
          </div>
        </div>

        <div className="lg:h-full lg:flex lg:pt-12 lg:justify-center lg:w-2/5">
          {showForm ? (
            <form
              className="pl-6 text-gray text-label space-y-3 "
              onSubmit={(event) => handleSubmit(event)}
            >
              <div className="flex flex-col space-y-2">
                <label htmlFor="name">_name:</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  className="h-10 px-2 bg-darker-blue border border-lines rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <label htmlFor="email">_email:</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  className="h-10 px-2 bg-darker-blue border border-lines rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-2 pb-2">
                <label htmlFor="message">_message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
                Your message has been accepted. You will recieve answer really
                soon!
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
        <div className="hidden lg:flex lg:w-3/5 justify-end">
          <CodeBlock
            text={code}
            language="javascript"
            showLineNumbers={true}
            wrapLines
            theme={dracula}
            customStyle={{
              paddingTop: "40px",
              paddingLeft: "20px",
              height: "100%",
              background: "none",
              borderLeft: "1px solid #1E2D3D",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
