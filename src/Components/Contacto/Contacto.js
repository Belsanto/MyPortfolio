import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css';

const Contacto = ({ onClose }) => {
  // Referencia al formulario para acceder a los elementos del DOM
  const form = useRef();
  // Estado para validar la dirección de correo electrónico
  const [emailValid, setEmailValid] = useState(true);

  useEffect(() => {
    // Cargar datos del Local Storage al montar el componente
    const savedData = JSON.parse(localStorage.getItem('form_data'));
    if (savedData) {
      // Rellenar los campos del formulario con los datos guardados
      form.current.user_name.value = savedData.user_name || '';
      form.current.from_name.value = savedData.from_name || '';
      form.current.message.value = savedData.message || '';
    }
  }, []);

  // Función para validar una dirección de correo electrónico
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Manejador de cambio del input de correo electrónico
  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailValid(validateEmail(email));
  };

  // Manejador de enfoque en un input
  const handleInputFocus = (e) => {
    const label = e.target.closest('label');
    label.classList.add('writing');
  };

  // Manejador de pérdida de enfoque en un input
  const handleInputBlur = (e) => {
    const input = e.target;
    const label = input.closest('label');

    if (input.value === '') {
      label.classList.remove('writing');
    }
  };

  // Función para enviar el correo electrónico
  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailValid) {
      return;
    }

    // Enviar el formulario utilizando la librería emailjs
    emailjs
      .sendForm(
        'service_pd2govc',
        'template_avmq97e',
        form.current,
        'tFqu5mXsvGw6onwmt',
      )
      .then((result) => {
        console.log(result.text);
        // Borrar datos del Local Storage después de enviar
        localStorage.removeItem('form_data');
        onClose();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  // Manejador de espera a envío del formulario
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Obtener los valores de los campos desde el estado local
    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      from_name: form.current.from_name.value,
      message: form.current.message.value,
    };

    // Guardar datos en el Local Storage
    localStorage.setItem('form_data', JSON.stringify(formData));
  };

  return (
    <>
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
          <span className={`label ${!emailValid ? 'writing' : ''}`}>
            Correo
          </span>
          <input
            id="user_email"
            type="email"
            name="user_email"
            required
            className={!emailValid ? 'invalid-input' : ''}
            onChange={handleEmailChange}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          {!emailValid && (
            <p className="error-message">
              Por favor, ingresa un correo válido.
            </p>
          )}
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
          className={`text-message ${
            form.current && form.current.message.value !== '' ? 'writing' : ''
          }`}
          htmlFor="message"
        >
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
  );
};

export default Contacto;
