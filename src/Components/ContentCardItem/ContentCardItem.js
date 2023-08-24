import React from 'react';
import './ContentCardItem.css';
import { Home } from '../Home/Home';
import { PersonalCardItem } from '../PersonalCardItem/PersonalCardItem';
import { ProfesionalCardItem } from '../ProfesionalCardItem/ProfesionalCardItem';
import { ProyectsCardItem } from '../ProyectsCardItem/ProyectsCardItem';
import { StudyCard } from '../StudyCard/StudyCard';

function ContentCardItem() {
  const shouldShow = false;

  return (
    <section className='card content-card'>
      {shouldShow && <Home/>}
      {shouldShow && <PersonalCardItem/>}
      {shouldShow && <ProfesionalCardItem/>}
      {!shouldShow && <StudyCard/>}
      {shouldShow && <ProyectsCardItem/>}
    </section>
  );
}

export { ContentCardItem };
