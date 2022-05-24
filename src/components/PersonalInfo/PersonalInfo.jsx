import React, { useState } from "react";
import FolderIcon from "@components/IconsComponents/FolderIcon";
import { ArrowIconSlim } from "@components/IconsComponents/ArrowIconSlim";
import { ArrowIcon } from "@components/IconsComponents/ArrowIcon";

const PersonalInfo = () => {
  const [showPersonal, setShowPersonal] = useState(false);
  const [showBio, setShowBio] = useState(false);
  const [showInterests, setShowInterests] = useState(false);
  const [showEducation, setShowEducation] = useState(false);

  return (
    <>
      <div
        className="w-full h-8 px-2 bg-lines flex items-center space-x-1 cursor-pointer"
        onClick={() => setShowPersonal((prev) => !prev)}
      >
        <ArrowIcon isActive={showPersonal} />
        <p>personal-info</p>
      </div>
      {showPersonal && (
        <div className="mt-2 px-2 space-y-2 h-auto w-full pb-2 ">
          <div
            className="flex py-1 space-x-2 text-label cursor-pointer"
            onClick={() => setShowBio((prev) => !prev)}
          >
            <ArrowIconSlim isActive={showBio} />
            <FolderIcon color={"#E99287"} /> <p>bio</p>
          </div>
          <div
            className="flex py-1 space-x-2 text-label text-gray cursor-pointer"
            onClick={() => setShowInterests((prev) => !prev)}
          >
            <ArrowIconSlim isActive={showInterests} />
            <FolderIcon color={"#43D9AD"} /> <p>interests</p>
          </div>
          <div
            className="flex py-1 space-x-2 text-label text-gray cursor-pointer"
            onClick={() => setShowEducation((prev) => !prev)}
          >
            <ArrowIconSlim isActive={showEducation} />
            <FolderIcon color={"#4D5BCE"} /> <p>education</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PersonalInfo;
