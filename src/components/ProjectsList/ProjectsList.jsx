import React, { useState, useContext, useEffect } from "react";
import { Context } from "@context/Context";
import ProjectCard from "@components/ProjectCard/ProjectCard";
import { ArrowIcon } from "@components/IconsComponents/ArrowIcon";
import CheckboxIcon from "@components/IconsComponents/CheckboxIcon";
import TechnologyFilterIcon from "@components/IconsComponents/TechnologyFilterIcon";

const ProjectsList = () => {
  const [filter, setFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const { projects } = useContext(Context);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (filter === "") {
      setFilteredProjects(projects);
    } else {
      const newProjects = projects.filter(
        (project) => project.technology === filter.toLowerCase()
      );
      setFilteredProjects(newProjects);
    }
  }, [filter, projects]);

  return (
    <>
      <div className="mb-8 space-y-3 lg:space-y-4 lg:w-72 lg:shrink-0 lg:border-r lg:border-r-lines lg:h-full">
        <div
          className="w-full h-8 px-4 bg-lines flex items-center space-x-1 cursor-pointer text-white lg:border-b lg:border-lines lg:bg-blue"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          <ArrowIcon isActive={showFilters} />
          <p>projects</p>
        </div>
        {showFilters && <Filters setFilter={setFilter} filter={filter} />}
      </div>
      <div className="px-6 space-y-3 lg:flex lg:flex-col lg:px-0 lg:w-full">
        <div className="text-label text-white flex space-x-3 lg:border-b lg:h-8 lg:shrink-0 lg:w-full border-lines">
          <p className="lg:hidden">{`// `} projects</p>
          <p className="text-gray lg:hidden">
            {`/ `} {filter.length === 0 ? "all" : filter}
          </p>
          <div className="hidden lg:flex text-gray space-x-8 items-center border-r border-lines pr-3">
            <p className="">
              {filter.length > 0 ? filter.toLowerCase() : "all-projects"}
            </p>
            <p className="text-[12px] font-medium">x</p>
          </div>
        </div>
        <div className="flex items-center flex-col space-y-5 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-5  lg:overflow-auto  lg:px-10 lg:pt-10 lg:pb-20">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

const Filters = ({ filter, setFilter }) => (
  <div className="flex flex-col px-6 space-y-2">
    <div
      className="flex space-x-3 h-6 items-center text-white text-label cursor-pointer"
      onClick={() => (filter === "React" ? setFilter("") : setFilter("React"))}
    >
      <CheckboxIcon isActive={filter === "React" ? true : false} />
      <div className="flex space-x-2">
        <TechnologyFilterIcon type="react" />
        <p>React</p>
      </div>
    </div>

    <div
      className="flex space-x-3 h-6 items-center text-white text-label cursor-pointer"
      onClick={() =>
        filter === "Angular" ? setFilter("") : setFilter("Angular")
      }
    >
      <CheckboxIcon isActive={filter === "Angular" ? true : false} />
      <div className="flex space-x-2">
        <TechnologyFilterIcon type="angular" />
        <p>Angular</p>
      </div>
    </div>
  </div>
);
export default ProjectsList;
