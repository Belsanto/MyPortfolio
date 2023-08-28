import React, { useState, useEffect } from "react"
import "./NotificationItem.css"

const Notification = ({ type, message, onClose }) => {
	const [visible, setVisible] = useState(true)

	useEffect(() => {
		setVisible(true)
	}, [type, message])

	const handleClose = () => {
		setVisible(false)
		onClose()
	}

	return (
		visible && (
			<div className={`notification ${type}`}>
				<p className="notification-message">{message}</p>
				<button className="close-button" onClick={handleClose}>
					&times;
				</button>
			</div>
		)
	)
}

export default Notification
