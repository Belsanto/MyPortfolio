import './StudiesItem.css'; // Import your CSS file
import {BsArrowUpRight} from 'react-icons/bs';

const StudiesItem = ({ studies }) => {

  return (
    <div>
      <div className="card container">
        {studies.map((study, index) => (
          <div
            className="card evento"
            key={index}
          >
            <div className="card foto" data-aos="fade-up">
                <article className='card'>
                    <a href={study.link} className='download-exp-icon' target="_blank" rel="noopener noreferrer"><BsArrowUpRight id={`${ study.link? '' : 'no-link'}`}/></a>
                    <h2>{study.title}</h2>
                    <b>{study.institute}</b>
                </article>
            </div>
            <h3 className="fecha">{study.startDate} • {study.endDate}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudiesItem;
