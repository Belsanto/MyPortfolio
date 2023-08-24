import './Styles/App.css';
import React, { useState, useEffect } from 'react';
import { MainCard } from './Components/MainCard/MainCard';
import { NavBarItem } from './Components/NavBarItem/NavBarItem';
import Modal from './Components/Modal/Modal';
import { FormularioItem } from './Components/FormularioItem/FormularioItem';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Cambia el estado inicial del modal después de que el componente se monte
    setIsModalOpen(false);
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
      >
        <FormularioItem onClose={handleCloseModal} />
      </Modal>
    </main>
  );
};

export default App;
