import "./SocialMediaItem.css"
import React from "react"
import { ImGoogle2, ImGithub } from "react-icons/im"
import { RiWhatsappFill } from "react-icons/ri"
import { BsLinkedin } from "react-icons/bs"
import { FaItchIo } from "react-icons/fa"

class MediaItem extends React.Component {
	render() {
		return (
			<aside className="socialMedia-box">
				<span>
					<a
						href={"mailto:b.elsanto182@gmail.com?Subject=Propuesta%20laboral%20para%20puesto%20de"}
						target="_blank"
						rel="noopener noreferrer">
						{" "}
						<ImGoogle2 fill="white" className="Icon-svg" />
					</a>
				</span>
				<span>
					<a
						href={
							"https://api.whatsapp.com/send/?phone=573184811237&text=Hola+Santiago%21+Me+encantar%C3%ADa+tenerte+en+mi+equipo.+Estoy+interesado+en+colaborar+contigo+en+proyectos+web.+%C2%BFPodemos+hablar+m%C3%A1s+al+respecto%3F&type=phone_number&app_absent=0"
						}
						target="_blank"
						rel="noopener noreferrer">
						{" "}
						<RiWhatsappFill fill="white" className="Icon-svg" />
					</a>
				</span>
				<span>
					<a href={"https://github.com/BelsantoUQ"} target="_blank" rel="noopener noreferrer">
						{" "}
						<ImGithub fill="white" className="Icon-svg" />
					</a>
				</span>
				<span>
					<a
						href={"https://www.linkedin.com/in/belsanto/"}
						target="_blank"
						rel="noopener noreferrer">
						{" "}
						<BsLinkedin fill="white" className="Icon-svg" />
					</a>
				</span>
				<span>
					<a href={"https://belsanto.itch.io/"} target="_blank" rel="noopener noreferrer">
						{" "}
						<FaItchIo fill="white" className="Icon-svg" />
					</a>
				</span>
			</aside>
		)
	}
}

function SocialMediaItem() {
	return <MediaItem />
}

export { SocialMediaItem }
