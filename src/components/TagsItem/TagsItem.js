import React from "react"
import "./TagsItem.css"

function TagsItem({ abilities }) {
	return (
		<section className="tags-container">
			<div className="tags">
				{abilities.map((ability, index) => (
					<div key={index} className="tag">
						{ability}
					</div>
				))}
			</div>
		</section>
	)
}

export { TagsItem }
