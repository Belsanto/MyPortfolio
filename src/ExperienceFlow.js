import React from 'react';
import './ExperienceFlow.css';
import {HiDownload} from 'react-icons/hi';
import { TagsItem } from './TagsItem';

const ExperienceFlow = ({ experiences }) => {
  return (
    <div className="experience-flow">
      {experiences.map((experience, index) => (
        <article className={`card experience-card ${index % 2 === 0 ? 'left' : 'right'}`} key={experience.id}>
          <article className='card'>
            <a href={experience.certify} className='download-exp-icon' target="_blank" rel="noopener noreferrer"><HiDownload /></a>
            <h2>{experience.position}</h2>
            <b>{experience.company}</b>
            <p className='date-card'>{`${experience.startDate} • ${experience.endDate}`} <span>({experience.time})</span></p>
            <p>{experience.description}</p>
            <TagsItem abilities={experience.skills}/>
          </article>
        </article>
      ))}
    </div>
  );
};

export default ExperienceFlow;
