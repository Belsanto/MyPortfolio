import { useRef } from "react"

const UseFormHandling = () => {
	const form = useRef()

	const handleInputFocus = (e) => {
		const label = e.target.closest("label")
		label.classList.add("writing")
	}

	const handleInputBlur = (e) => {
		const input = e.target
		const label = input.closest("label")

		if (input.value === "") {
			label.classList.remove("writing")
		}
	}

	const handleFormSubmit = (e) => {
		e.preventDefault()
		// Obtener los valores de los campos desde el estado local
		const formData = {
			user_name: form.current.user_name.value,
			user_email: form.current.user_email.value,
			from_name: form.current.from_name.value,
			message: form.current.message.value,
		}
		// Guardar datos en el Local Storage
		localStorage.setItem("form_data", JSON.stringify(formData))
	}

	return { form, handleInputFocus, handleInputBlur, handleFormSubmit }
}
export default UseFormHandling
