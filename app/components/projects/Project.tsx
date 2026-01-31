import Folder from "../UI/Folder";

const Project = () => {
  const projects = [
    {
      name: "DevGuide",
      link: "/project/devguide",
    },
    {
      name: "Projects1",
      link: "/projects",
    },
    {
      name: "Projects2",
      link: "/projects",
    },
  ];
  return (
    <div>
      <h1 className="text-sm font-bold">Projects</h1>
      {projects.map((project, index) => (
        <Folder key={index} link={project.link} name={project.name} from='project' />
      ))}
    </div>
  );
};

export default Project;
