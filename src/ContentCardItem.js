import './ContentCardItem.css';
import { Home } from './Home';
import { PersonalCardItem } from './PersonalCardItem';
import { ProfesionalCardItem } from './ProfesionalCardItem';
import { ProyectsCardItem } from './ProyectsCardItem';

function ContentCardItem() {
  const shouldShow = true;

  return (
    <section className='card content-card'>
      {shouldShow && <Home/>}
      {!shouldShow && <PersonalCardItem/>}
      {!shouldShow && <ProfesionalCardItem/>}
      {!shouldShow && <ProyectsCardItem/>}
    </section>
  );
}

export { ContentCardItem };
