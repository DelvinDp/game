import './index.css'
const ImageItem = props => {
  const {imageDetails} = props
  const {id, imageUrl, thumbnailUrl} = imageDetails
  return (
    <>
      <div className="imageContainer">
        <li className="project-item-container">
          <img
            className="image-item"
            src={imageUrl}
            alt={`project-item${id}`}
            
          />
        </li>
      </div>
    </>
  )
}

export default ImageItem
