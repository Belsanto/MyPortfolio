// ButtonItem.js
import React from 'react';
import './ButtonItem.css';
import CV_PDF from '../../utils/SANTIAGO VELANDIA GALLO_CV.pdf';

function downloadCV() {
  // Simulamos la descarga del CV en una nueva pestaña
  window.open(CV_PDF, '_blank');
}

function ButtonItem() {
  return (
    <aside className="cv-box">
      <button className="button" onClick={downloadCV}>
        Descargar CV
      </button>
    </aside>
  );
}

export { ButtonItem };
