import React from "react"
import "./ContentCardItem.css"
import { Home } from "../../pages/Home/Home"
import { PersonalCardItem } from "../../pages/PersonalCardItem/PersonalCardItem"
import { ProfesionalCardItem } from "../../pages/ProfesionalCardItem/ProfesionalCardItem"
import { ProyectsCardItem } from "../../pages/ProyectsCardItem/ProyectsCardItem"
import { StudyCard } from "../../pages/StudyCard/StudyCard"
import { Route, Routes } from "react-router-dom"

function ContentCardItem() {
	//const shouldShow = false

	return (
		<section className="card content-card">
			<Routes>
				<Route path="/*" element={<Home />} />
				<Route path="/aboutme" element={<PersonalCardItem />} />
				<Route path="/work-experience" element={<ProfesionalCardItem />} />
				<Route path="/study" element={<StudyCard />} />
				<Route path="/proyects" element={<ProyectsCardItem />} />
			</Routes>
			{/* {shouldShow && <Home />}
			{shouldShow && <PersonalCardItem />}
			{shouldShow && <ProfesionalCardItem />}
			{!shouldShow && <StudyCard />}
			{shouldShow && <ProyectsCardItem />} */}
		</section>
	)
}

export { ContentCardItem }
