import { v4 as uuidv4 } from 'uuid'

function FeaturedProject({ 
    className,
    thumbnail, 
    thumbnailClassName, 
    title, 
    alt, 
    liveUrl, 
    codeUrl, 
    technologies,
    description 
}) {
    return (
        <div>
            <div className={className}>
                <div className="featured-project-text">
                    <p className="featured-header">Featured Project</p>
                    <a href={liveUrl} target="_blank" rel="noreferrer">
                        <p className="featured-title">{title}</p>
                    </a>
                    <p className="featured-desc">{description}</p>
                    <div className="featured-technologies">
                        {
                            technologies.map((tech) => (
                                <p key={uuidv4()}>{tech}</p>
                            ))
                        }
                    </div>
                    <div className="featured-buttons">
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
                <a href={liveUrl} target="_blank" rel="noreferrer" className={thumbnailClassName}>
                    <img src={thumbnail} alt={alt} />
                </a>
            </div>
        </div>
      )
}

export default FeaturedProject
