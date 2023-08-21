import StudiesItem from './StudiesItem';
import './StudyCard.css';
import SENA from './utils/certific.pdf';

const studies = [
  {
    institute: 'Universidad del Quindío',
    startDate: 'Agosto 2018',
    endDate: 'En curso',
    title: 'Ingeniería de Sistemas y Computación',
    imagePath: 'utils/studies/img1',
    link: false,
  },{
    institute: 'Platzi',
    startDate: '2022',
    endDate: 'Aprendizaje Continuo',
    title: 'Desarrollo Web y Otras Tecnologías',
    imagePath: 'utils/studies/img1',
    link: 'https://platzi.com/p/B_santiago/',
  },{
    institute: 'SENA: Servicio Nacional de Aprendizaje',
    startDate: 'Julio 2017',
    endDate: 'Marzo 2019',
    title: 'Tecnico en Programación de Software',
    imagePath: 'utils/studies/img1',
    link: SENA,
  },
];

function StudyCard() {
  return (
    <section className='card card-section'>
      <div className='card-study'>
        <div className="card-title">
          <h1>Estudios <br/>y Certificaciones</h1>
        </div>
        <StudiesItem studies={studies} />
      </div>
    </section>
  );
}

export { StudyCard };