import React from "react";

const Hello = () => {
  return (
    <section className="w-full px-4 flex flex-col justify-between">
      <div className="absolute w-[255.65px] h-[277.05px] left-4 rotate-[-94.3deg] top-60 bg-gradient-green opacity-40 blur-[174px]" />
      <div className="absolute w-[255.65px] h-[277.05px] right-4 rotate-[13.51deg] bottom-60 bg-gradient-blue opacity-40 blur-[174px]" />
      <div className="text-white mt-[calc(20vh)]">
        <p className="text-bodytext">Hi all. I am</p>
        <p className="text-headline">Juan P. Ferro</p>
        <p className="text-gradient-green text-bodytext">
          {`>`} Front-end developer
        </p>
      </div>
      <div className="text-snippets mt-[calc(22vh)]">
        <p className="text-gray">{`//`} find my profile on Github:</p>
        <div className="text-white">
          <span className="text-gradient-blue">const</span>{" "}
          <span className="text-gradient-green">githubLink</span> ={" "}
          <a href="" className="text-orange hover:underline">
            {`"https://github.com/example/url"`}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hello;
