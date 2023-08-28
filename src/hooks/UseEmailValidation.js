import { useState } from "react"

const UseEmailValidation = () => {
	const [emailValid, setEmailValid] = useState(true)

	const validateEmail = (email) => {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return regex.test(email)
	}

	const handleEmailChange = (email) => {
		setEmailValid(validateEmail(email))
	}

	return { emailValid, handleEmailChange }
}

export default UseEmailValidation
