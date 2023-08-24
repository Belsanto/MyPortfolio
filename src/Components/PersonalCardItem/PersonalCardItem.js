import SkillsContainer from '../MySkillsItem/MySkillsItem';
import './PersonalCardItem.css';
import BackgroungDogs from '../../utils/dogos.JPG';

function PersonalCardItem() {
  return (
    <div className="card card-about">
      <section className="card card-personal">
        <aside className="card-text">
          <section className="card-title">
            <h1>Sobre mi:</h1>
          </section>
          <p>
            <span>¡Hola de nuevo!👋</span>
          </p>
        </aside>
        <aside className="card-window" />
        <aside className="card-text">
          <p>
            Soy un apasionado de la tecnología, tecnico en programación de
            software y estudiante de ingenieria de sistemas y computación, con
            experiencia en el desarrollo de software y soporte técnico. Mi
            pasión, además de la tecnología, son los videojuegos, la naturaleza
            y los animales.
          </p>
          <div>
            <h3>
              <b>My Skills</b>
            </h3>
            <SkillsContainer />
          </div>
          <p>
            Hoy por hoy me encuentro cursando los últimos dos semestres en
            ingeniería de sistemas y computación en la jornada nocturna. Cuento
            también con una sólida formación en HTML, CSS, PL/SQL y bases de
            datos SQL. Además, tengo conocimientos en métodos y técnicas de
            pruebas y calidad de software así como familiaridad con el uso
            herramientas de automatización de pruebas.
          </p>
        </aside>
        <aside className="card-window" />
        <aside className="card-text">
          <p>
            Gracias por visitar mi portafolio web, aquí podrás conocer más de mi
            evolución como profesional, proyectos destacados y cómo mi pasión
            por la tecnología se ha traducido en resultados concretos. ¡Espero
            que disfrutes explorando mi trayectoria y habilidades!
          </p>
          <h3 className="search-job">
            {' '}
            <b>ACTUALMENTE BUSCO AMPLIAR MI CAMPO LABORAL</b>
          </h3>
          <p>
            Estoy entusiasmado por seguir creciendo profesionalmente en el campo
            de la tecnología y contribuir al desarrollo de soluciones
            innovadoras. Si buscas a alguien apasionado, con habilidades
            técnicas y capacidad de adaptación, estaré encantado de ser
            considerado para oportunidades en el sector.
          </p>
          {/*<p>Si quieres ponerte en contacto conmigo, por favor completa este pequeño <a href='#'>formulario</a></p>*/}
        </aside>
      </section>
      <section className="card parallax">
        <figure>
          <img src={BackgroungDogs} alt="Perros" />
        </figure>
      </section>
    </div>
  );
}

export { PersonalCardItem };
