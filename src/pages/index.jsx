import Layout from "@components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="w-full px-4 flex flex-col justify-between space-y-44">
        <div className="absolute w-44 h-48 left-4 top-60 bg-gradient-green opacity-40 blur-3xl" />
        <div className="absolute w-44 h-48 right-4 bottom-60 bg-gradient-blue opacity-40 blur-3xl" />
        <div className="text-white">
          <p className="text-bodytext">Hi all. I am</p>
          <p className="text-headline">Juan P. Ferro</p>
          <p className="text-gradient-green text-bodytext">
            {`>`} Front-end developer
          </p>
        </div>
        <div className="text-snippets">
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
    </Layout>
  );
}
