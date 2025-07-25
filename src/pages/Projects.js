import Project from "../components/Project/Project";
import { projects } from "../helpers/projectsList";
const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((project, idx) => {
            return (
              <Project
                key={idx}
                title={project.title}
                img={project.img}
                index={idx}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
