import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contacto.css';

const Contacto = () => {
  const form = useRef();
  const [emailValid, setEmailValid] = useState(true);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmailValid(validateEmail(email));
  };

  const handleInputFocus = (e) => {
    const label = e.target.closest('label');
    label.classList.add('writing');
  };

  const handleInputBlur = (e) => {
    const input = e.target;
    const label = input.closest('label');

    if (input.value === '') {
      label.classList.remove('writing');
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailValid) {
      return;
    }

    emailjs
      .sendForm('service_pd2govc', 'template_avmq97e', form.current, 'tFqu5mXsvGw6onwmt')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
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
          />
        </label>
        <label htmlFor="user_email">
          <span className={`label ${!emailValid ? 'writing' : ''}`}>Correo</span>
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
          {!emailValid && <p className="error-message">Por favor, ingresa un correo válido.</p>}
        </label>
        <label htmlFor="from_name">
          <span className="label">Asunto</span>
          <input id="from_name" type="text" name="from_name" required onFocus={handleInputFocus} onBlur={handleInputBlur} />
        </label>
        <label className={`text-message ${form.current && form.current.message.value !== '' ? 'writing' : ''}`} htmlFor="message">
          <span className="label">Mensaje</span>
          <textarea id="message" name="message" required onFocus={handleInputFocus} onBlur={handleInputBlur} />
        </label>
        <div className='card-submit'>
          <button className='button'>
            <input id="" type="submit" />
          </button>
        </div>
      </form>
    </>
  );
};

export default Contacto;
