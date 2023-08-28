import "./MyPhoto.css"
import belsanto_photo from "../../utils/mydisign.png"

function MyPhoto() {
	return (
		<section className="photo">
			<picture>
				<img src={belsanto_photo} alt="" />
			</picture>
		</section>
	)
}

export { MyPhoto }
