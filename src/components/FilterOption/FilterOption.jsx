import React from "react";
import CheckboxIcon from "@components/IconsComponents/CheckboxIcon";
import TechnologyFilterIcon from "@components/IconsComponents/TechnologyFilterIcon";

const FilterOption = ({ tech, handleFilter, filter }) => (
  <>
    <div
      className="flex space-x-3 h-6 items-center text-white text-label cursor-pointer"
      onClick={() => handleFilter(tech)}
    >
      <CheckboxIcon
        isActive={filter.split(",").includes(tech) ? true : false}
      />
      <div className="flex space-x-2">
        <TechnologyFilterIcon type={tech.toLowerCase()} />
        <p>{tech}</p>
      </div>
    </div>
  </>
);

export default FilterOption;
