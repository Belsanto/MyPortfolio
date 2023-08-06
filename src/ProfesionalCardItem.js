import LogoGallery from './LogoGallery';
import './ProfesionalCardItem.css';

function ProfesionalCardItem() {
    
  return (
    <section className='card card-profesional'>
        
        <aside className='card-text'>
            <h1>SOBRE MI:</h1>
            <p>
            <span>¡Hola de nuevo!</span>, Soy un técnico en desarrollo de software en proceso de completar mi ingeniería en sistemas y computación en la Universidad del Quindío, cursando los últimos dos semestres en la jornada nocturna.
            </p>
            <p>
            Mi trayectoria comenzó en 2017 cuando me sumergí en el desarrollo de software con Java de manera autodidacta mientras trabajaba en un callcenter. Esta experiencia me enseñó a lidiar con clientes y a solucionar problemas de manera efectiva, desarrollando habilidades de comunicación y resolución de conflictos.
            </p>
            <p>
            Desde entonces, he explorado diversas áreas, incluyendo tecnología e infraestructura, como el mantenimiento de sistemas, redes, desarrollo de software funcional (usando Java, PHP, JavaScript y mySQL) y he trabajado con grandes cantidades de datos, diseñando tablas con sus campos, comentarios e índices, y realizando consultas de grado avanzado para extraer información relevante de las bases de datos en tiempo real. También he relaizado varios cursos y proyectos universitarios con tecnologías de desarrollo front-end (como React y Angular) y backend (como Spring Boot y FastAPI), lo que me ha brindado una perspectiva integral del desarrollo de aplicaciones.
            </p>
            <h2>Estas son algunas de las las tecnologías que manejo: </h2>
        </aside>
        <aside>
            <LogoGallery/>
        </aside>
        <aside className='card-text'>
            <p>
            Una experiencia reciente me mostró la importancia de la calidad del software y la relevancia de roles como QA. Por esta razón, me he embarcado en el aprendizaje de automatización de software utilizando tecnologías como Cypress y Playwright.
            </p>
            <p>
            Además, he desarrollado un nivel avanzado de inglés a lo largo de los años, todo esto me ayuda a demostrar mi capacidad de adaptación y motivación para seguir aprendiendo y creciendo en el mundo tecnologíco concretamente del software.
            </p>
            <p>
            Gracias por visitar mi portafolio web, aquí podrás conocer más sobre mi evolución como profesional, proyectos destacados y cómo mi pasión por la tecnología se ha traducido en resultados concretos. ¡Espero que disfrutes explorando mi trayectoria y habilidades tecnológicas!
            </p>
            <h2>ACTUALMENTE BUSCO AMPLIAR MI CAMPO LABORAL</h2>
            <p>Si quieres ponerte en contacto conmigo, porfavor completa este pequeño <a href='#'>formulario</a></p>
        </aside>
    </section>
  );
}

export { ProfesionalCardItem };
