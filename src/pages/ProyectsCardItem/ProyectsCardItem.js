import React, { useState } from "react"
import "./ProyectsCardItem.css"
import vidMia from "../../utils/videos/video1.mp4"
import imgMia from "../../utils/img/mia.jpg"
import vidQuantum from "../../utils/videos/quantum.mp4"
import imgQuantum from "../../utils/img/quantum.jpg"
import itch from "../../utils/img/itchio.png"
import { TagsItem } from "../../components/TagsItem/TagsItem"
import { PiGithubLogoDuotone } from "react-icons/pi"

const proyects = [
	{
		id: 1,
		name: "Mia's Forgettable Date Night",
		url: "https://belsanto.itch.io/mias-forgettable-date-night",
		git: "https://github.com/BelsantoUQ/RebellionJam/tree/Persistence-Dev",
		date: "2023-10",
		tag: itch,
		description:
			"I designed the user interface (UI), including layout and visual styling. I implemented data persistence for saving player progress and facilitated character selection through an intuitive system. Additionally, I developed a node class and a graph class to control character movement, ensuring smooth and logical navigation within the game environment. I used Unity and C# to deliver an immersive and high-quality gaming experience.",
		video: vidMia,
		thumbnails: imgMia,
		skills: ["Unity", "C#", "Agile", "UI/UX Design"],
	},
	{
		id: 2,
		name: "Quantum Race: Dash Through the Uncertainty",
		url: "https://luisdo.itch.io/quantum-race",
		git: "https://github.com/BelsantoUQ/GameJamTeam5/tree/Santiago",
		date: "2023-9",
		tag: itch,
		description:
			"I spearheaded the implementation of movement mechanics and power-ups in a project, enhancing gameplay and user experience. I made substantial contributions to world design and character conceptualization, ensuring a seamless visual and narrative cohesion within the game environment. I showcased a strong programming skill set, utilizing languages like C# and Unity to ensure smooth performance and intuitive interaction. Additionally, I crafted particle effects to complement art and design, thereby ensuring aesthetic consistency and player immersion. My emphasis on usability and creativity proved pivotal for the overall success of the project.",
		video: vidQuantum,
		thumbnails: imgQuantum,
		skills: ["Unity", "C#", "Agile"],
	},
]

const ProyectsCardItem = () => {
	const [hoveredVideo, setHoveredVideo] = useState(null)

	return (
		<section className="card card-section">
			<div className="card-title">
				<h1 className="big-tittle">
					Main <br /> Projects
				</h1>
			</div>
			<div className="proyect-flow">
				{proyects.map((proyect, index) => (
					<a
						href={proyect.url}
						target="_blank"
						rel="noopener noreferrer"
						className="proyect-card"
						key={proyect.id}
						onMouseOver={() => setHoveredVideo(proyect)}
						onMouseLeave={() => setHoveredVideo(null)}>
						<h1 className="project-tittle">{proyect.name}</h1>
						<img className="itch-card" src={proyect.tag} alt={`Logo ${index}`} />
						<br />
						{/* <p>{proyect.url}</p> */}
						<b className="project-date">{`${proyect.date}`}</b>
						<a
							href={proyect.git}
							target="_blank"
							rel="noopener noreferrer"
							className="proyect-repo">
							<PiGithubLogoDuotone fill="white" className="Icon-svg" />
						</a>
						<p className="project-description">{proyect.description}</p>
						<figure className="card-video">
							<img src={proyect.thumbnails} alt={`Logo ${index}`} />
							<video
								className="proyect-video"
								src={hoveredVideo === proyect ? proyect.video : ""}
								loop
								autoPlay
								muted
							/>
						</figure>
						<section className="project-skills">
							<TagsItem abilities={proyect.skills} />
						</section>
					</a>
				))}
			</div>
		</section>
	)
}

export { ProyectsCardItem }
