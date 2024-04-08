import houseMarketplaceThumbnail from '../assets/thumbnails/house-marketplace-thumbnail.jpg'

function ProjectItem() {
  return (
    <div>
        <div className="project-item">
            <div className="project-thumbnail">
                <img src={houseMarketplaceThumbnail} alt="house marketplace app" width="250px" />
            </div>
        </div>
    </div>
  )
}

export default ProjectItem
