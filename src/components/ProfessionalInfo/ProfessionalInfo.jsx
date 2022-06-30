import React, { useState, useContext } from "react";
import { Context } from "@context/Context";
import { ArrowIcon } from "@components/IconsComponents/ArrowIcon";
import FolderIcon from "@components/IconsComponents/FolderIcon";
import { ArrowIconSlim } from "@components/IconsComponents/ArrowIconSlim";
import MarkdownIcon from "@components/IconsComponents/MarkdownIcon";

const ProfessionalInfo = () => {
  const [showProfessional, setShowProfessional] = useState(false);

  return (
    <>
      <div
        className="w-full h-8 px-4 bg-lines flex items-center space-x-1 cursor-pointer lg:bg-opacity-0 lg:border-b lg:border-lines"
        onClick={() => setShowProfessional((prev) => !prev)}
      >
        <ArrowIcon isActive={showProfessional} />
        <p>professional-info</p>
      </div>
      {showProfessional && (
        <div className="mt-2 px-4 space-y-2 h-auto w-full pb-2 ">
          <Desoft />
        </div>
      )}
    </>
  );
};

const Desoft = () => {
  const [showDesoft, setShowDesoft] = useState(false);
  const { aboutInfo, setAboutInfo } = useContext(Context);
  const handleActivateDesoft = () => {
    setAboutInfo({
      root: "professional-info",
      folder: "desoft",
      file: "desoft",
      content: `I started working at desoft in september of 2020 lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum`,
    });
  };
  return (
    <>
      <div
        className={`flex py-1 space-x-2 text-label cursor-pointer text-${
          aboutInfo.folder === "desoft" ? "white" : "gray"
        }`}
        onClick={() => setShowDesoft((prev) => !prev)}
      >
        <ArrowIconSlim isActive={showDesoft} />
        <FolderIcon color={"#4D5BCE"} /> <p>desoft</p>
      </div>
      {showDesoft && (
        <div
          className={`flex mx-8 space-x-2 text-label cursor-pointer text-${
            aboutInfo.file === "desoft" ? "white" : "gray"
          }`}
          onClick={handleActivateDesoft}
        >
          <MarkdownIcon />
          <p>desoft</p>
        </div>
      )}
    </>
  );
};

export default ProfessionalInfo;
