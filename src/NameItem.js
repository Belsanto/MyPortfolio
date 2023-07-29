import './NameItem.css';
import { SocialMediaItem } from './SocialMediaItem';

function NameItem() {
  return (
    <section className='presentation-box'>
      <h1>Santiago Velandia Gallo</h1>
      <p className='subtitle'>Desarrollador web</p>
      <SocialMediaItem/>
    </section>

  );
}

export { NameItem };