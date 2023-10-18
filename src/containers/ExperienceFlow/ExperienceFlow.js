import React from "react"
import "./ExperienceFlow.css"
import { HiDownload } from "react-icons/hi"
import { TagsItem } from "../../components/TagsItem/TagsItem"

const ExperienceFlow = ({ experiences }) => {
	return (
		<div className="experience-flow">
			{experiences.map((experience, index) => (
				<article
					className={`card experience-card ${index % 2 === 0 ? "left" : "right"}`}
					key={experience.id}>
					<article>
						<a
							href={experience.certify}
							className="download-exp-icon"
							target="_blank"
							rel="noopener noreferrer">
							<HiDownload />
						</a>
						<b>{experience.position}</b>
						<h2>{experience.company}</h2>
						<p className="date-card">
							{`${experience.startDate} • ${experience.endDate}`} <span>({experience.time})</span>
						</p>
						<ul className="task-list">
							{experience.description.split("-").map((line, i) => {
								const trimmedLine = line.trim()
								if (trimmedLine) {
									return (
										<li>
											<p key={i}>{trimmedLine}</p>
										</li>
									)
								}
								return null
							})}
						</ul>
						<TagsItem abilities={experience.skills} />
					</article>
				</article>
			))}
		</div>
	)
}

export default ExperienceFlow
