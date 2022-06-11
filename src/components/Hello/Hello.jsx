import React from "react";

const Hello = () => {
  return (
    <section className="flex justify-center">
      <div className="absolute w-44 h-48 left-4 top-60 lg:left-[unset] lg:right-[26rem] lg:top-40 bg-gradient-green opacity-60 blur-[90px]" />
      <div className="absolute w-44 h-48 right-4 bottom-60 lg:right-60 lg:bottom-40 bg-gradient-blue opacity-60 blur-[90px]" />

      <div className=" w-full px-4 flex flex-col space-y-34 pb-40 lg:w-1/3 lg:space-y-20 lg:px-0 lg:pb-24">
        <div className="text-white mt-40 lg:mt-24">
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

      <div className="border hidden lg:flex w-1/3 h-auto">code snippets</div>
    </section>
  );
};

export default Hello;
