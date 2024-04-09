import ProjectItem from "../components/ProjectItem"
import houseMarketplaceThumbnail from '../assets/thumbnails/house-marketplace-thumbnail.jpg'
import githubFinderThumbnail from '../assets/thumbnails/github-finder-thumbnail.jpg'

function Projects() {
  return (
    <div className="projects">
        <div className="projects-header">
            <h1>My Projects</h1>
        </div>
        <div className="project-items">
          <ProjectItem 
            thumbnail={houseMarketplaceThumbnail} 
            title="House Marketplace App" 
            alt="house marketplace app" 
            liveUrl="https://house-marketplace-app-ochre.vercel.app/" 
            codeUrl="https://github.com/eaknott/house-marketplace-app" 
            technologies={["React", "Firebase Auth", "Geocoding API", "Firestore NoSQL", "Google OAuth"]}
          />
          <ProjectItem 
            thumbnail={githubFinderThumbnail} 
            title="GitHub Finder App" 
            alt="github finder app" 
            liveUrl="https://github-finder-app-navy-theta.vercel.app/" 
            codeUrl="https://github.com/eaknott/github-finder-app" 
            technologies={["React", "GitHub API", "TailwindCSS", "DaisyUI"]}
          />
        </div>
    </div>
  )
}

export default Projects
