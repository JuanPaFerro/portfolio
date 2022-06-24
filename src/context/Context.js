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
  const projects = [
    {
      title: "EPROG",
      subtitle: "_digital-tv",
      image: "https://i.postimg.cc/z3Yz4r50/tv.jpg",
      details:
        "E-ProgTV, web application that manages the Electronic Programming Guide (EPG) of Cuban Television. It implements the Digital Terrestrial Multimedia Broadcast (DTMB) standard. Developed with Node.js, Angular 4 and MongoDB.",
      link: "",
      technology: "angular",
    },
    {
      title: "EPROG V2.0",
      subtitle: "_digital-tv",
      image: "https://i.postimg.cc/4x2QZqVs/tv-digital.jpg",
      details:
        "New version of the E-ProgTV system. Migrate to new, more scalable and secure technologies and expand their functionalities",
      link: "",
      technology: "angular",
    },
    {
      title: "E-Prog Analytics",
      subtitle: "_analytics",
      image: "https://i.postimg.cc/2jsCVSdK/analytics.jpg",
      details:
        "Duis aute irure dolor in velit esse cillum incididunt ut labore.",
      link: "",
      technology: "angular",
    },
    {
      title: "Feedback System",
      subtitle: "_feedback",
      image: "https://i.postimg.cc/gjXtChgq/feedback.jpg",
      details:
        "Comment system to receive complaints and suggestions from the public regarding the television billboard.",
      link: "",
      technology: "angular",
    },
    {
      title: "AeroStore",
      subtitle: "_e-shop",
      image: "https://i.postimg.cc/Y0BtcBvQ/aerostore-screenshot.png",
      details:
        "Duis aute irure dolor in velit esse cillum incididunt ut labore.",
      link: "https://aero-store.vercel.app/",
      technology: "react",
    },
  ];
  const contactLinks = [
    { name: "Link 1", link: "https://link.example.com" },
    { name: "Link 2", link: "https://link.example.com" },
    { name: "Link 3", link: "https://link.example.com" },
    { name: "Link 4", link: "https://link.example.com" },
  ];

  const value = { aboutInfo, setAboutInfo, projects, contactLinks };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};
