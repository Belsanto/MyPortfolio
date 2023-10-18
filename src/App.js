import "./styles/App.css"
import React, { useState, useEffect } from "react"
import { MainCard } from "./pages/MainCard/MainCard"
import { NavBarItem } from "./routes/NavBarItem/NavBarItem"
import Modal from "./containers/Modal/Modal"
import { FormularioItem } from "./containers/FormularioItem/FormularioItem"
import { ImBooks } from "react-icons/im"
import { FaUserAstronaut, FaUserGraduate, FaUserTie } from "react-icons/fa"
import { HiHome, HiMail } from "react-icons/hi"
import { BrowserRouter } from "react-router-dom"
//TODO estilos responsive de 480px a 280px
const navLinks = [
	{
		id: "home",
		icon: <HiHome className="nav-icon" />,
		text: "Home",
		active: false,
	},
	{
		id: "projects",
		icon: <ImBooks className="nav-icon" />,
		text: "Projects",
		active: false,
	},
	{
		id: "aboutme",
		icon: <FaUserAstronaut className="nav-icon" />,
		text: "About Me",
		active: false,
	},
	{
		id: "work-experience",
		icon: <FaUserTie className="nav-icon" />,
		text: "Work Experience",
		active: false,
	},
	{
		id: "study",
		icon: <FaUserGraduate className="nav-icon" />,
		text: "Study",
		active: true,
	},
	{
		id: "contact",
		icon: <HiMail className="nav-icon" />,
		text: "Contact",
		active: false,
	},
]

const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		// Cambia el estado inicial del modal después de que el componente se monte
		setIsModalOpen(false)
	}, [])

	const handleOpenModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

	return (
		<main className="App">
			<BrowserRouter>
				<MainCard />
				<NavBarItem onOpenModal={handleOpenModal} navLinks={navLinks} />
			</BrowserRouter>
			<Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Contact Form">
				<FormularioItem onClose={handleCloseModal} />
			</Modal>
		</main>
	)
}

export default App
