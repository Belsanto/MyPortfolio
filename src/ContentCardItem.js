import './ContentCardItem.css';
import { Home } from './Home';
import { ProfesionalCardItem } from './ProfesionalCardItem';

function ContentCardItem() {
  const shouldShow = true;

  return (
    <section className='card content-card'>
      {!shouldShow && <Home/>}
      {shouldShow && <ProfesionalCardItem/>}
    </section>
  );
}

export { ContentCardItem };
