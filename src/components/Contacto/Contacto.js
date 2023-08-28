import React, { useEffect, useState } from "react"
import emailjs from "@emailjs/browser"
import "./Contacto.css"
import useEmailValidation from "../../hooks/UseEmailValidation"
import useFormHandling from "../../hooks/UseFormHandling"
import Notification from "../NotificationItem/NotificationItem" // Ajusta la ruta según la ubicación de tu componente

const Contacto = ({ onClose }) => {
	const [notification, setNotification] = useState(null)
	const { emailValid, handleEmailChange } = useEmailValidation()
	const { form, handleInputFocus, handleInputBlur, handleFormSubmit } = useFormHandling()
	useEffect(() => {
		// Cargar datos del Local Storage al montar el componente
		const savedData = JSON.parse(localStorage.getItem("form_data"))
		if (savedData) {
			form.current.user_name.value = savedData.user_name || ""
			form.current.from_name.value = savedData.from_name || ""
			form.current.message.value = savedData.message || ""
		}
	}, [])

	const sendEmail = async (e) => {
		e.preventDefault()

		if (!emailValid) {
			return
		}

		try {
			await emailjs.sendForm(
				"service_pd2govc",
				"template_avmq97e",
				form.current,
				"tFqu5mXsvGw6onwmt"
			)
			localStorage.removeItem("form_data")
			setNotification({ type: "success", message: "Correo enviado con éxito." })
			setTimeout(function () {
				onCloseNotification()
				onClose()
			}, 3000)
		} catch (error) {
			console.log(error.text)
			setNotification({ type: "error", message: "Hubo un error al enviar el correo." + error.text })
		}
	}

	const onCloseNotification = () => {
		setNotification(null)
	}

	return (
		<>
			{notification && (
				<Notification
					type={notification.type}
					message={notification.message}
					onClose={onCloseNotification}
				/>
			)}
			<form className="form-card" ref={form} onSubmit={sendEmail}>
				<label htmlFor="user_name">
					<span className="label">Nombre</span>
					<input
						id="user_name"
						type="text"
						name="user_name"
						required
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
						onChange={handleFormSubmit}
					/>
				</label>
				<label htmlFor="user_email">
					<span className={`label ${!emailValid ? "writing" : ""}`}>Correo</span>
					<input
						id="user_email"
						type="email"
						name="user_email"
						required
						className={!emailValid ? "invalid-input" : ""}
						onChange={(e) => handleEmailChange(e.target.value)}
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
					/>
					{!emailValid && <p className="error-message">Por favor, ingresa un correo válido.</p>}
				</label>
				<label htmlFor="from_name">
					<span className="label">Asunto</span>
					<input
						id="from_name"
						type="text"
						name="from_name"
						required
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
						onChange={handleFormSubmit}
					/>
				</label>
				<label
					className={`text-message
					${form.current && form.current.message.value !== "" ? "writing" : ""}`}
					htmlFor="message">
					<span className="label">Mensaje</span>
					<textarea
						id="message"
						name="message"
						required
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
						onChange={handleFormSubmit}
					/>
				</label>
				<div className="card-submit">
					<button className="button">
						<input id="" type="submit" />
					</button>
				</div>
			</form>
		</>
	)
}

export default Contacto
