import './MainCard.css';
import { FirstCardItem } from './FirstCardItem';
import { ContentCardItem } from './ContentCardItem';

function MainCard() {
  return (
    <section className='card main-card'>
      <main className='card'>
        <FirstCardItem/>
      </main>
      <ContentCardItem/>
    </section>
  );
}

export { MainCard };