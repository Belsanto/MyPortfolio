import React, { useState } from "react"
import "./ProyectsCardItem.css"
import video from "../../utils/videos/video1.mp4"
import imagen1 from "../../utils/img/viticor.jpg"

const proyects = [
	{
		id: 1,
		position: "News Feed (video no disponible aun)",
		company: "https://glittering-kelpie-19c64e.netlify.app/home",
		startDate: "2022-07-01",
		endDate: "2022-05-28",
		description: "Consumo de Api de noticias de RepidApi usando Angular",
		video: video,
		thumbnails: imagen1,
	},
	{
		id: 2,
		position: "Chat con Angular (video no disponible aun)",
		company: "https://jade-semolina-b8fa2c.netlify.app/home",
		startDate: "2022-11-15",
		endDate: "2022-10-31",
		description: "Consumo de una api de chat",
		video: video,
		thumbnails: imagen1,
	},
]

const ProyectsCardItem = () => {
	const [hoveredVideo, setHoveredVideo] = useState(null)

	return (
		<section className="card card-section">
			<div className=" proyect-flow">
				{proyects.map((proyect, index) => (
					<div
						className="proyect-card"
						key={proyect.id}
						onMouseOver={() => setHoveredVideo(proyect)}
						onMouseLeave={() => setHoveredVideo(null)}>
						<a href={proyect.company}>
							<h2>{proyect.position}</h2>
						</a>
						{/* <p>{proyect.company}</p> */}
						<p>{`${proyect.startDate} - ${proyect.endDate}`}</p>
						<p>{proyect.description}</p>
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
					</div>
				))}
			</div>
		</section>
	)
}

export { ProyectsCardItem }
