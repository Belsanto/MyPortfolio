import React from 'react';
import './ContentCardItem.css';
import { Home } from './Home';
import { PersonalCardItem } from './PersonalCardItem';
import { ProfesionalCardItem } from './ProfesionalCardItem';
import { ProyectsCardItem } from './ProyectsCardItem';
import { StudyCard } from './StudyCard';

function ContentCardItem() {
  const shouldShow = false;

  return (
    <section className='card content-card'>
      {shouldShow && <Home/>}
      {shouldShow && <PersonalCardItem/>}
      {!shouldShow && <ProfesionalCardItem/>}
      {shouldShow && <StudyCard/>}
      {shouldShow && <ProyectsCardItem/>}
    </section>
  );
}

export { ContentCardItem };
