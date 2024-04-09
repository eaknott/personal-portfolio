import { v4 as uuidv4 } from 'uuid'

function ProjectItem({ 
    thumbnail, 
    title, 
    alt, 
    liveUrl, 
    codeUrl, 
    technologies 
}) {
  return (
    <div>
        <div className="project-item">
            <div className="project-thumbnail">
                <img src={thumbnail} alt={alt} width="200px" />
            </div>
            <div className="project-text">
                <h1>{title}</h1>
                <div className="project-description">
                    {
                        technologies.map((tech) => (
                            <p key={uuidv4()}>{tech}</p>
                        ))
                    }
                </div>
                <div className="project-buttons">
                    <a 
                        href={liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <button className="btn-live">
                            View Project
                        </button>
                    </a>
                    <a 
                        href={codeUrl} 
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <button className="btn-code">
                            View Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectItem
