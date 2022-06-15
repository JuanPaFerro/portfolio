import SnakeGame from "@components/SnakeGame/SnakeGame";
import React from "react";

const Hello = () => {
  return (
    <section className="flex justify-center lg:h-[87vh]">
      <div className="absolute w-44 h-48 left-4 top-60 lg:left-[unset] lg:right-[26rem] lg:top-40 bg-gradient-green opacity-60 blur-[90px]" />
      <div className="absolute w-44 h-48 right-4 bottom-60 lg:right-60 lg:bottom-40 bg-gradient-blue opacity-60 blur-[90px]" />

      <div className=" w-full px-4 flex flex-col space-y-34 pb-40 lg:justify-center lg:w-2/5 lg:space-y-24 lg:p-0">
        <div className="text-white mt-40 lg:mt-0">
          <p className="text-bodytext">Hi all. I am</p>
          <p className="text-headline">Juan P. Ferro</p>
          <p className="text-gradient-green text-bodytext">
            {`>`} Front-end developer
          </p>
        </div>
        <div className="text-snippets mt-44">
          <p className="text-gray">{`//`} find my profile on Github:</p>
          <div className="text-white">
            <span className="text-gradient-blue">const</span>{" "}
            <span className="text-gradient-green">githubLink</span> ={" "}
            <a
              href="https://github.com/JuanPaFerro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-orange hover:underline cursor-pointer">{`"https://github.com/JuanPaFerro"`}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-2/5 h-auto pb-12 items-center">
        <SnakeGame />
      </div>
    </section>
  );
};

export default Hello;
