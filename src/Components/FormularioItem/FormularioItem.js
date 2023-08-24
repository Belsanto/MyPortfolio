import Contacto from '../Contacto/Contacto';
import './FormularioItem.css';

function FormularioItem({onClose}) {
  const handleClose = () => {
    onClose();
  };
  return (
    <>
    <aside className='card card-section card-form'>
      <Contacto onClose={handleClose}/>
    </aside>
    </>
  );
}

export { FormularioItem };
