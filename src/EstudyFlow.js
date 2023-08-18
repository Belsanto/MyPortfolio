import React from 'react';
import './EstudyFlow.css';
import {HiDownload} from 'react-icons/hi';
import { TagsItem } from './TagsItem';

const EstudyFlow = ({ estudies }) => {
  return (
    <div className="estudy-flow">
      {estudies.map((estudy, index) => (
        <article className={`card estudy-card ${index % 2 === 0 ? 'left' : 'right'}`} key={estudy.id}>
          <article className='card'>
            <a href={estudy.certify} className='download-exp-icon' target="_blank" rel="noopener noreferrer"><HiDownload /></a>
            <h2>{estudy.position}</h2>
            <b>{estudy.company}</b>
            <p className='date-card'>{`${estudy.startDate} • ${estudy.endDate}`} </p>
            <p>{estudy.description}</p>
            <TagsItem abilities={estudy.skills}/>
          </article>
        </article>
      ))}
    </div>
  );
};

export default EstudyFlow;
