import React, { useState, useContext } from "react";
import FolderIcon from "@components/IconsComponents/FolderIcon";
import { ArrowIconSlim } from "@components/IconsComponents/ArrowIconSlim";
import { ArrowIcon } from "@components/IconsComponents/ArrowIcon";
import { Context } from "@context/Context";
import MarkdownIcon from "@components/IconsComponents/MarkdownIcon";

const PersonalInfo = () => {
  const [showPersonal, setShowPersonal] = useState(false);

  return (
    <>
      <div
        className="w-full h-8 px-4 bg-lines flex items-center space-x-1 cursor-pointer"
        onClick={() => setShowPersonal((prev) => !prev)}
      >
        <ArrowIcon isActive={showPersonal} />
        <p>personal-info</p>
      </div>
      {showPersonal && (
        <div className="mt-2 px-4 space-y-2 h-auto w-full pb-2 ">
          <Bio />
          <Interests />
          <Education />
        </div>
      )}
    </>
  );
};

//Interests
const Interests = () => {
  const [showInterests, setShowInterests] = useState(false);
  return (
    <div
      className="flex py-1 space-x-2 text-label text-gray cursor-pointer"
      onClick={() => setShowInterests((prev) => !prev)}
    >
      <ArrowIconSlim isActive={showInterests} />
      <FolderIcon color={"#43D9AD"} /> <p>interests</p>
    </div>
  );
};
//Education
const Education = () => {
  const [showEducation, setShowEducation] = useState(false);
  const { setAboutInfo, aboutInfo } = useContext(Context);
  const handleActivateUniversity = () => {
    setAboutInfo({
      root: "personal-info",
      folder: "education",
      file: "university",
      content: `Im a Software Engineer who graduated from University of Pinar del Rio lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.
    `,
    });
  };
  return (
    <>
      <div
        className={`flex py-1 space-x-2 text-label cursor-pointer text-${
          aboutInfo.folder === "education" ? "white" : "gray"
        }`}
        onClick={() => setShowEducation((prev) => !prev)}
      >
        <ArrowIconSlim isActive={showEducation} />
        <FolderIcon color={"#4D5BCE"} /> <p>education</p>
      </div>
      {showEducation && (
        <div
          className={`flex mx-8 space-x-2 text-label cursor-pointer text-${
            aboutInfo.file === "university" ? "white" : "gray"
          }`}
          onClick={handleActivateUniversity}
        >
          <MarkdownIcon />
          <p>university</p>
        </div>
      )}
    </>
  );
};

const Bio = () => {
  const [showBio, setShowBio] = useState(false);
  const { setAboutInfo, aboutInfo } = useContext(Context);
  const handleActivateBio = () => {
    setAboutInfo({
      root: "personal-info",
      folder: "bio",
      file: "bio",
      content: `I have 5 years of experience in web development lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat officia deserunt mollit anim id est laborum.
    `,
    });
  };
  return (
    <>
      <div
        className={`flex py-1 space-x-2 text-label cursor-pointer text-${
          aboutInfo.folder === "bio" ? "white" : "gray"
        }`}
        onClick={() => setShowBio((prev) => !prev)}
      >
        <ArrowIconSlim isActive={showBio} />
        <FolderIcon color={"#E99287"} /> <p>bio</p>
      </div>
      {showBio && (
        <div
          className={`flex mx-8 space-x-2 text-label cursor-pointer text-${
            aboutInfo.file === "bio" ? "white" : "gray"
          }`}
          onClick={handleActivateBio}
        >
          <MarkdownIcon />
          <p>bio</p>
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
