import SkillsContainer from "../../containers/MySkillsItem/MySkillsItem"
import "./PersonalCardItem.css"
import BackgroungDogs from "../../utils/dogos.JPG"

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
						Soy un apasionado de la tecnología y el desarrollo de videojuegos en Unity, tecnico en
						programación de software y estudiante de ingenieria de sistemas y computación, con
						experiencia en el desarrollo de software y soporte técnico.
					</p>
					<div>
						<h3>
							<b>Mis Habilidades</b>
						</h3>
						<SkillsContainer />
					</div>
					<p>
						He trabajado en el desarrollo de software integral para la gestión de turnos y en
						proyectos administrativos utilizando tecnologías como Java, PHP, y PL/SQL. También tengo
						habilidades en resolución de problemas como en métodos y técnicas de pruebas y calidad
						de software así como familiaridad con el uso herramientas de automatización de
						pruebas.Hoy por hoy me encuentro cursando los últimos dos semestres en ingeniería de
						sistemas y computación en la jornada nocturna.
					</p>
				</aside>
				<aside className="card-window" />
				<aside className="card-text">
					<p>
						Gracias por visitar mi portafolio web, aquí podrás conocer más de mi evolución como
						profesional, proyectos destacados y cómo mi pasión por la tecnología se ha traducido en
						resultados concretos. ¡Espero que disfrutes explorando mi trayectoria y habilidades!
					</p>
					<h3 className="search-job">
						{" "}
						<b>ACTUALMENTE BUSCO AMPLIAR MI CAMPO LABORAL</b>
					</h3>
					<p>
						Estoy emocionado por seguir creciendo en el campo de desarrollo de software y/o
						videojuegos y contribuir con soluciones creativas e innovadoras. Si estás en busca de un
						profesional apasionado y con habilidades técnicas en software o desarrollo en Unity, no
						dudes en contactarme.
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
	)
}

export { PersonalCardItem }
