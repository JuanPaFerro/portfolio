import React from "react";
import Link from "next/link";
import Image from "next/image";
import TechnologyIcon from "@components/IconsComponents/TechnologyIcon";
import placeholderImage from "@images/placeholder.png";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-2 text-gray">
        <p className="text-gradient-blue font-bold">{project.title}</p>
        <p>{`/ ${project.subtitle}`}</p>
      </div>
      <div className="w-72 border border-lines rounded-xl overflow-hidden">
        <div className="h-40 rounded-t-xl overflow-hidden border-b border-lines relative">
          <Image
            src={project.image}
            alt={`image of project ${project.title}`}
            layout="fill"
            objectFit="cover"
          />
          <TechnologyIcon type={project.technology} />
        </div>
        <div className=" flex flex-col p-8 space-y-5 text-label text-gray bg-darker-blue">
          <p className={``}>{project.details}</p>
          {project.link === "" ? (
            <p className="text-orange text-[10px]">This project is property of Desoft.</p>
          ) : (
            <Link href={project.link}>
              <div className="h-9 w-32 text-snippets text-white flex items-center justify-center rounded-lg cursor-pointer bg-[#1C2B3A] hover:bg-[#263B50]">
                <p>view-project</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
