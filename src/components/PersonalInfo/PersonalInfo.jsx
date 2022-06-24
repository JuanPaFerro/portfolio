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
        className="w-full h-8 px-4 bg-lines flex items-center space-x-1 cursor-pointer lg:bg-opacity-0 lg:border-b lg:border-lines"
        onClick={() => setShowPersonal((prev) => !prev)}
      >
        <ArrowIcon isActive={showPersonal} />
        <p>personal-info</p>
      </div>
      {showPersonal && (
        <div className="mt-2 px-4 space-y-2 h-auto w-full pb-2 ">
          <Bio />
          {/* <Interests /> */}
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
      content: `I am a Software Engineer graduated from the University of Pinar del Río Hermanos Saiz Montes de Oca, in July 2020.
      During 5 courses I was discovering, step by step, the exciting technological world and cultivating a deep love for learning and understanding new technologies.
      Since my second year as a student I was involved in university projects, where I gained a lot of experience and was able to improve not only my technical skills, but also learned to work as a team`,
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
      content: `Hello, my name is Juan Pablo Ferro. I am a 26-year-old software engineer who graduated from University of Pinar del Rio in July 2020.
      In September 2020 I started working at Desoft, one of the most important tech corporations on the country & Leaders at development of high-tech solutions for national and foreign companies`,
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
