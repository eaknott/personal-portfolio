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
            <a href={liveUrl} target="_blank" rel="noreferrer" className="project-thumbnail">
                <img src={thumbnail} alt={alt} />
            </a>
            <div className="project-text">
                <a href={liveUrl} target="_blank" rel="noreferrer">
                    <h1>{title}</h1>
                </a>
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
