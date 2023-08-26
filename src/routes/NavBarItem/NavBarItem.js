import { Link } from "react-router-dom"
import "./NavBarItem.css"
import React, { useState } from "react" // Import useState

function NavBarItem({ onOpenModal, navLinks }) {
	const [activeLink, setActiveLink] = useState(null) // State to track active link

	return (
		<section className="navbar">
			<nav>
				<ul className="nav-list" id="navmenu">
					{navLinks.map(({ id, icon, text }) => (
						<li key={id}>
							<Link
								className={id === activeLink && id !== "contact" ? "icon-active" : ""}
								to={id !== "home" ? `/${id}` : "/MyPortfolio"}
								title={text}
								onClick={(e) => {
									if (id === "contact") {
										onOpenModal()
										e.preventDefault()
									} else {
										setActiveLink(id) // Set active link on click
									}
								}}>
								{icon}
								<span className="nav-tooltip">{text}</span>
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</section>
	)
}

export { NavBarItem }
