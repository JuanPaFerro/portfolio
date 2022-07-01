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
      content: `I started working at desoft in September 2020.
      I immediately joined EprogTV, a national project focused to ease the administration of digital television in the country.
      During my first months I was carrying out development and maintenance tasks on the project's user interface, with small but increasingly frequent approaches to its backend.
      Step by step I grew and gained the trust of my manager and colleagues and soon I was in charge of developing the new version of the project.
      During this time I also carried out a few secondary projects such as the creation of a feedback system and an analytics module with which the productivity of the editors was improved by 87%`,
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
