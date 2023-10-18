// ImageDisplay.js
import "./ImageDisplay.css"

const ImageDisplay = ({ imageUrl, altText }) => {
	return (
		<div className="image-display">
			<img src={imageUrl} alt={altText} className="image" />
		</div>
	)
}

export default ImageDisplay
