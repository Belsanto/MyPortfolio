import "./NameItem.css"
import { ButtonItem } from "../ButtonItem/ButtonItem"

function NameItem() {
	return (
		<section className="presentation-box">
			<h1>
				Santiago <span>@Belsanto</span>
			</h1>
			<h2 className="subtitle">Desarrollador de Software</h2>
			<ButtonItem />
		</section>
	)
}

export { NameItem }
