import './ProfesionalCardItem.css';
import ExperienceFlow from './ExperienceFlow';
import Experiience1 from './utils/TOC CERTIFICACION LABORAL.pdf';
import Experiience2 from './utils/certificado multip.pdf';


const workExperience = [
  {
    id: 1,
    position: 'Desarrollador de Software',
    company: 'Technologies of Colombia',
    startDate: 'Enero de 2023',
    endDate: 'Junio de 2023',
    time: '6 meses',
    description: 'Contribuí en la creación, integración y corrección de modulos en la parte administrativa de un software clínico en APEX(Oracle Application Express) aplicando tecnicas avanzadas de consultas y creación de funciones y/o procedimientos con PL/SQL, tambíen contribuí en un proyecto en JAVA en la creación de servicios SOAP. También brindé asesoramiento y acompañamiento a los usuarios cuando estos presentaban un error ya sea de código y de manejo del software. Además llevaba a cabo pruebas manuales exhaustivas en los módulos que desarrollaba y/o modificaba, identificando y corrigiendo defectos antes de su liberación, esto garantizaba la calidad y funcionalidad del software.',
    certify: Experiience1,
    skills: ['JavaScript', 'CSS','Oracle SQL','APEX', 'PL/SQL', 'Java', 'SOAP']
  },
  {
    id: 2,
    position: 'Técnico en Programación',
    company: 'Empresa Multipropósito de Calarcá',
    startDate: 'Septiembre de 2018',
    endDate: 'Marzo de 2019',
    time: '6 meses',
    description: 'Estuve a cargo de la creación de un software funcional para el área de servicio al cliente usando JAVA como lenguaje principal y MySQL para la base de datos. También realicé una web interna en WordPress para que los trabajadores de la empresa pudieran acceder a las aplicaciones necesarias para desempeñar sus labores a la vez que permitía la realización de publicaciones de eventos o acontecimientos empresariales. También contribuí con la corrección de defectos de código de algunas aplicaciones de la empresa realizadas en PHP.',
    certify: Experiience2,
    skills: ['Java SE', 'MySQL', 'PHP', 'Desarrollo Web', 'WordPress']
  },
];

function ProfesionalCardItem() {
  return (
    <div className='card card-section'>
      <h1>Experiencia Laboral</h1>
      <ExperienceFlow experiences={workExperience} />
    </div>
  );
}

export { ProfesionalCardItem };