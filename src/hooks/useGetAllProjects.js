import React, { useState, useEffect } from "react";

const useGetAllProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await (await fetch("/api/projects")).json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return { projects };
};

export default useGetAllProjects;
