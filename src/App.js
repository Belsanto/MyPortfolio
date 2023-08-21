import './App.css';
import React, { useState, useEffect } from 'react';
import { MainCard } from './MainCard';
import { NavBarItem } from './NavBarItem';
import Modal from './Modal';
import { FormularioItem } from './FormularioItem';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Cambia el estado inicial del modal después de que el componente se monte
    setIsModalOpen(true);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <main className="App">
      <MainCard />
      <NavBarItem onOpenModal={handleOpenModal} />
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title="Formulario de Contacto"
      ><FormularioItem/></Modal>
    </main>
  );
};

export default App;
