import useGetAllProjects from "@hooks/useGetAllProjects";
import React, { useState, createContext } from "react";
export const Context = createContext();

export const Provider = ({ children }) => {
  const [aboutInfo, setAboutInfo] = useState({
    root: "personal-info",
    folder: "bio",
    file: "bio",
    content: `Hello, my name is Juan Pablo Ferro. I am a 26-year-old software engineer who graduated from University of Pinar del Rio in July 2020.
    In September 2020 I started working at Desoft, one of the most important tech corporations on the country & Leaders at development of high-tech solutions for national and foreign companies
    `,
  });
  const {projects} = useGetAllProjects();

  const value = { aboutInfo, setAboutInfo, projects };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
