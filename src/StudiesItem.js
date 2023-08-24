import React from 'react';
import './StudiesItem.css';
import StudyItem from './StudyItem';

const StudiesItem = ({ studies }) => {
  return (
    <div>
      <div className="card card-flow">
        {studies.map((study, index) => (
          <StudyItem key={index} study={study} studyIndex={index} />
        ))}
      </div>
    </div>
  );
};

export default StudiesItem;
