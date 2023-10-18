import StudiesItem from "../../containers/StudiesItem/StudiesItem"
import "./StudyCard.css"
import { LogoGallery } from "../../components/LogoGallery/LogoGallery"
import uq from "../../utils/img/uq.png"
import platzi from "../../utils/img/platzi.png"
import sena from "../../utils/img/sena.png"

const studies = [
	{
		institute: "University of Quindío",
		startDate: "August 2018",
		endDate: false,
		title: "Systems Engineering and Computing",
		imagePath: "utils/studies/img1",
		link: false,
		img: uq,
	},
	{
		institute: "Platzi",
		startDate: "2022",
		endDate: "Always Learning",
		title: "Web Development and Other Technologies",
		imagePath: "utils/studies/img1",
		link: "https://platzi.com/p/B_santiago/",
		img: platzi,
	},
	{
		institute: "SENA: National Learning Service",
		startDate: "July 2017",
		endDate: "March 2019",
		title: "Software Programming Technician",
		imagePath: "utils/studies/img1",
		link: "https://www.linkedin.com/in/belsanto/details/education/",
		img: sena,
	},
]

function StudyCard() {
	return (
		<section className="card card-section">
			<div className="card-study">
				<div className="card-title">
					<h1 className="big-tittle">
						Education <br />& Certifications
					</h1>
				</div>
				<aside>
					<h2>Some of the technologies and tools I am familiar with:</h2>
					<LogoGallery />
				</aside>
				<StudiesItem studies={studies} />
			</div>
		</section>
	)
}

export { StudyCard }
