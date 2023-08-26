import "./MainCard.css"
import { FirstCardItem } from "../FirstCardItem/FirstCardItem"
import { ContentCardItem } from "../../routes/ContentCardItem/ContentCardItem"

function MainCard() {
	return (
		<section className="card card-portfolio">
			<section className="card main-card">
				<main className="card card-presentation">
					<FirstCardItem />
				</main>
				<ContentCardItem />
			</section>
		</section>
	)
}

export { MainCard }
