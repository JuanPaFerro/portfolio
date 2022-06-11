import React, { useState } from "react";
import { ArrowIcon } from "@components/IconsComponents/ArrowIcon";

const ContactsInfo = () => {
  const [showContacts, setShowContacts] = useState(false);
  return (
    <>
      <div
        className="w-full h-8 px-4 bg-lines flex items-center space-x-1 cursor-pointer lg:bg-opacity-0 lg:border-y lg:border-lines"
        onClick={() => setShowContacts((prev) => !prev)}
      >
        <ArrowIcon isActive={showContacts} />
        <p>contacts</p>
      </div>
    </>
  );
};

export default ContactsInfo;
