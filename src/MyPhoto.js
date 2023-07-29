import './MyPhoto.css';
import imagen from './utils/mydisign.png';

function MyPhoto() {
  return (
    <section className='photo'>
      <picture>
          <img src={imagen} alt='' />
      </picture>
    </section>
  );
}

export { MyPhoto };