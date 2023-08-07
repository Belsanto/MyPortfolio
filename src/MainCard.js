import './MainCard.css';
import { FirstCardItem } from './FirstCardItem';
import { ContentCardItem } from './ContentCardItem';

function MainCard() {
  return (
    <section className='card card-portfolio'>
      <section className='card main-card'>
        <main className='card'>
          <FirstCardItem/>
        </main>
        <ContentCardItem/>
      </section>
    </section>
  );
}

export { MainCard };