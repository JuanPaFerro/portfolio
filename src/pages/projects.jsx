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
      <section className="pb-12">
        <div className="flex h-16 w-full pl-6 text-white text-snippets items-center">
          <p>_projects</p>
        </div>
        <div className="h-auto w-full flex flex-col space-y-1">
          <ProjectsList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;
