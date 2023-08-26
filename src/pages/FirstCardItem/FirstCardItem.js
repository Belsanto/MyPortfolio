// FirstCardItem.js
import React from "react"
import "./FirstCardItem.css"
import { Footer } from "../../components/Footer/Footer"
import { NameItem } from "../../components/NameItem/NameItem"
import { MyPhoto } from "../../components/MyPhoto/MyPhoto"
import { SocialMediaItem } from "../../components/SocialMediaItem/SocialMediaItem"

function FirstCardItem() {
	return (
		<aside className="card first-card">
			<MyPhoto />
			<NameItem />
			<SocialMediaItem />
			<Footer />
		</aside>
	)
}

export { FirstCardItem }
