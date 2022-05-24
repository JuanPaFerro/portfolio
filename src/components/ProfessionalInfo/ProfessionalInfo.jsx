import React, { useState, useEffect } from "react";
import { ArrowIcon } from "@components/IconsComponents/ArrowIcon";
import FolderIcon from "@components/IconsComponents/FolderIcon";
import { ArrowIconSlim } from "@components/IconsComponents/ArrowIconSlim";

const ProfessionalInfo = () => {
  const [showProfessional, setShowProfessional] = useState(false);
  const [showDesoft, setShowDesoft] = useState(false);

  return (
    <>
      <div
        className="w-full h-8 px-4 bg-lines flex items-center space-x-1 cursor-pointer"
        onClick={() => setShowProfessional((prev) => !prev)}
      >
        <ArrowIcon isActive={showProfessional} />
        <p>professional-info</p>
      </div>
      {showProfessional && (
        <div className="mt-2 px-4 space-y-2 h-auto w-full pb-2 ">
          <div
            className="flex py-1 space-x-2 text-label text-gray cursor-pointer"
            onClick={() => setShowDesoft((prev) => !prev)}
          >
            <ArrowIconSlim isActive={showDesoft} />
            <FolderIcon color={"#4D5BCE"} /> <p>desoft</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfessionalInfo;
