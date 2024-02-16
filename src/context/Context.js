import useGetAllProjects from "@hooks/useGetAllProjects";
import React, { useState, createContext } from "react";
export const Context = createContext();

export const Provider = ({ children }) => {
    let birthDay = new Date(1996, 3, 18);
    let today = new Date();
    let age = today.getYear() - birthDay.getYear() - (today.getMonth() < birthDay.getMonth() ? 1 : 0);

    const [aboutInfo, setAboutInfo] = useState({
        root: "personal-info",
        folder: "bio",
        file: "bio",
        content: `Hello, my name is Juan Pablo Ferro. I am a ${age}-year-old software engineer who graduated from University of Pinar del Rio in July 2020.
    In September 2020 I started working at Desoft, one of the most important tech corporations on the country & Leaders at development of high-tech solutions for national and foreign companies
    `,
    });
    const { projects } = useGetAllProjects();

    const value = { aboutInfo, setAboutInfo, projects };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};
