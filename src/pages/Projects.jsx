import ProjectItem from "../components/ProjectItem"

function Projects() {
  return (
    <div className="projects">
        <div className="projects-header">
            <h1>My Projects</h1>
        </div>
        <div className="project-items">
          <ProjectItem />
        </div>
    </div>
  )
}

export default Projects
