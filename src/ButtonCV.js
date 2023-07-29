// ButtonCV.js
import React from 'react';
import './ButtonCV.css';
import CV_PDF from './utils/SANTIAGO VELANDIA GALLO_CV.pdf';

function downloadCV() {
  // Simulamos la descarga del CV en una nueva pestaña
  window.open(CV_PDF, '_blank');
}

function ButtonCV() {
  return (
      <button className='button-cv' onClick={downloadCV}>Descargar CV</button>
  );
}

export { ButtonCV };
