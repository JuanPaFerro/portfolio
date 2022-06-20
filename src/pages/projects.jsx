import Footer from "@components/Footer/Footer";
import ProjectsList from "@components/ProjectsList/ProjectsList";
import Head from "next/head";
import React from "react";

const Projects = () => {
  return (
    <>
      <Head>
        <title>projects</title>
      </Head>
      <section className="mb-16 lg:flex lg:m-0 lg:h-[87vh]">
        <div className="flex h-16 w-full pl-6 text-white text-snippets items-center lg:hidden">
          <p>_projects</p>
        </div>
        <div className="h-auto w-full flex flex-col space-y-1 lg:space-y-0 lg:flex-row">
          <ProjectsList />
        </div>
      </section>
    </>
  );
};

export default Projects;
