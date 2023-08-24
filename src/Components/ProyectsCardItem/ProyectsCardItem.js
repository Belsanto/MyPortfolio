import React, { useState } from 'react';
import './ProyectsCardItem.css';
import video from '../../utils/videos/video1.mp4';
import imagen1 from '../../utils/viticor.jpg';

const proyects = [
  {
    id: 1,
    position: 'Desarrollador Frontend',
    company: 'ABC Tech',
    startDate: '2020-01-01',
    endDate: '2021-02-28',
    description: 'Trabajé en proyectos web emocionantes...',
    video: video,
    thumbnails: imagen1,
  },
  {
    id: 2,
    position: 'Diseñador UI/UX',
    company: 'DesignCo',
    startDate: '2019-03-15',
    endDate: '2020-12-31',
    description: 'Contribuí en la creación de interfaces...',
    video: video,
    thumbnails: imagen1,
  },
  {
    id: 3,
    position: 'Especialista en Marketing Digital',
    company: 'MarketingMasters',
    startDate: '2018-05-10',
    endDate: '2019-02-28',
    description: 'Dirigí campañas en línea y analicé...',
    video: video,
    thumbnails: imagen1,
  },
];

const ProyectsCardItem = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  return (
    <section className="card card-section">
      <div className=" proyect-flow">
        {proyects.map((proyect, index) => (
          <div
            className="proyect-card"
            key={proyect.id}
            onMouseOver={() => setHoveredVideo(proyect)}
            onMouseLeave={() => setHoveredVideo(null)}
          >
            <h2>{proyect.position}</h2>
            <p>{proyect.company}</p>
            <p>{`${proyect.startDate} - ${proyect.endDate}`}</p>
            <p>{proyect.description}</p>
            <figure className="card-video">
              <img src={proyect.thumbnails} alt={`Logo ${index}`} />
              <video
                className="proyect-video"
                src={hoveredVideo === proyect ? proyect.video : ''}
                loop
                autoPlay
                muted
              />
            </figure>
          </div>
        ))}
      </div>
    </section>
  );
};

export { ProyectsCardItem };
