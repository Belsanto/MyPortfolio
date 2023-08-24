import './StudyItem.css'; // Import your CSS file
import { BsArrowUpRight } from 'react-icons/bs';

const StudyItem = ({ study, studyIndex }) => {
  const handleLinkClick = (e) => {
    if (!study.link) {
      e.preventDefault(); // Evitar la redirección si no hay un enlace válido
    }
  };
  return (
    <div className="card card-institute" key={studyIndex}>
      <div className="card card-info" data-aos="fade-up">
        <article className="card">
          <a
            href={study.link || '#'}
            className={`download-exp-icon ${!study.link ? 'no-link' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            <BsArrowUpRight />
          </a>
          <h2>{study.title}</h2>
          <b>{study.institute}</b>
        </article>
      </div>
      <h3 className="study-date">
        {study.startDate} • {study.endDate ? study.endDate : 'En curso'}
      </h3>
    </div>
  );
};

export default StudyItem;
