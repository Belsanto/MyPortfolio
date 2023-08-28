import React from "react"
import "./Modal.css"

const Modal = ({ isOpen, onClose, title, children }) => {
	const handleClose = () => {
		onClose()
	}

	return (
		isOpen && (
			<div className="modal-overlay">
				<div className="card modal">
					<div className="modal-header">
						<h3>{title}</h3>
						<button className="close-button" onClick={handleClose}>
							&times;
						</button>
					</div>
					<div className="modal-content">{children}</div>
				</div>
			</div>
		)
	)
}

export default Modal
