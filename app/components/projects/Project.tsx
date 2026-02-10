import Folder from "../UI/Folder";

const Project = () => {
  const projects = [
    {
      name: "DevGuide",
      link: "/project/devguide",
    },
    {
      name: "GenAi",
      link: "/project/genai",
    },
    {
      name: "bgift-social",
      link: "/project/bgift-social",
    },
    {
      name: "vs-portfolio",
      link: "/project/vs-portfolio",
    },
    {
      name: "crypto-wallet",
      link: "/project/crypto-wallet",
    },
  ];
  return (
    <div>
      <h1 className="text-sm font-bold">Projects</h1>
      {projects.map((project, index) => (
        <Folder
          key={index}
          link={project.link}
          name={project.name}
          from="project"
        />
      ))}
    </div>
  );
};

export default Project;
