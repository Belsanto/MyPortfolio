import { LogoGallery } from './LogoGallery';
import './PersonalCardItem.css';
import BackgroungDogs from './utils/dogos.JPG';

function PersonalCardItem() {

  return (
    <div className='card card-about'>
      <section className='card card-personal'>
        <aside className='card-text'>
          <h1>SOBRE MI:</h1>
          <p>
            <span>¡Hola de nuevo!</span></p>
        </aside>
        <aside className='card-window'/>
        <aside className='card-text'>
          <p>
            Soy un apasionado de la tecnología, tecnico en programación de software con experiencia en el desarrollo de software y soporte técnico.  Mi pasión, además de la tecnología, son los videojuegos, la naturaleza y los animales.
          </p>
        </aside>
        <aside className='card-tecnologies'>
          <h2>Estas son algunas de las tecnologías que he usado: </h2>
          <LogoGallery/>
        </aside>
        <aside className='card-text'>
          <p>
          Hoy por hoy me encuentro cursando los últimos dos semestres en ingeniería de sistemas y computación en la jornada nocturna. Cuento con una sólida formación en HTML, CSS, PL/SQL y bases de datos SQL. Además, tengo conocimientos en varios lenguajes de programación, como C, Java, JavaScript, PHP y Python.
          </p>
        </aside>
        
        <aside className='card-window'/>
        <aside className='card-text'>
          <p>
          Mi trayectoria comenzó en 2017 cuando me sumergí en el desarrollo de software con Java de manera autodidacta mientras trabajaba en un callcenter. Trabajando allí, aprendí a lidiar con clientes y a solucionar problemas de manera efectiva, desarrollando habilidades de comunicación y resolución de conflictos.
          </p>
          <p>
            Desde entonces, he explorado diversas áreas de la tecnología, como el mantenimiento de sistemas de computo, desarrollo de software funcional y a la medida(usando Wordpress, Java, PHP, JavaScript y mySQL) y maquetación web. También he trabajado directamente con bases de datos diseñando tablas con sus campos, comentarios e índices, manipulando grandes cantidades de datos mediante consultas de grado avanzado para extraer información relevante en tiempo real. Además he realizado varios cursos en Platzi y proyectos universitarios con tecnologías de desarrollo front-end (como React y Angular) y backend (como Spring Boot y FastAPI), lo que me ha brindado una perspectiva integral del desarrollo de aplicaciones.
          </p>
          <p>
          A lo largo de mi carrera y mi experiencia profesional, he alcanzado un nivel avanzado de inglés a lo largo de los años, he adquirido habilidades en pruebas manuales, resolución de problemas y optimización de rendimiento en consultas a base de datos. He trabajado en estrecha colaboración con equipos multidisciplinarios y he demostrado adaptabilidad y habilidades de trabajo en equipo.
          </p>
        </aside>
        <aside className='card-window'/>
        <aside className='card-text'>
          <p>
            Dato curioso: Una experiencia reciente me mostró la importancia de la calidad del software y la relevancia de roles como QA. Por esta razón, me he interezado en el aprendizaje de automatización y tecnicas de pruebas de software utilizando tecnologías como Cypress y Playwright.
          </p>
          <p>
            Gracias por visitar mi portafolio web, aquí podrás conocer más sobre mi evolución como profesional, proyectos destacados y cómo mi pasión por la tecnología se ha traducido en resultados concretos. ¡Espero que disfrutes explorando mi trayectoria y habilidades!
          </p>
          <h1 className='search-job'>ACTUALMENTE BUSCO AMPLIAR MI CAMPO LABORAL</h1>
          <p>Estoy entusiasmado por seguir creciendo profesionalmente en el campo de la tecnología y contribuir al desarrollo de soluciones innovadoras. Si buscas a alguien apasionado, con habilidades técnicas y capacidad de adaptación, estaré encantado de ser considerado para oportunidades en el sector.</p>
          <p>Si quieres ponerte en contacto conmigo, por favor completa este pequeño <a href='#'>formulario</a></p>
        </aside>
      </section>
      <section className='card parallax'>
        <figure>
          <img src={BackgroungDogs} alt='Perros' />
        </figure>
      </section>
    </div>
  );
}

export { PersonalCardItem };
