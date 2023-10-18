import SkillsContainer from "../../containers/MySkillsItem/MySkillsItem"
import "./PersonalCardItem.css"
import BackgroungDogs from "../../utils/img/dogos.JPG"

function PersonalCardItem() {
	return (
		<div className="card card-about">
			<section className="card card-personal">
				<aside className="card-text">
					<section className="card-title">
						<h1 className="big-tittle">About me:</h1>
					</section>
					<p>
						<span>Hello again!👋</span>
					</p>
				</aside>
				<aside className="card-window" />
				<aside className="card-text">
					<p>
						I am passionate about technology and game development in Unity, technically skilled in
						software programming, and currently studying systems and computer engineering. I have
						experience in software development and technical support.
					</p>
					<div>
						<h3>
							<b>My Skills</b>
						</h3>
						<SkillsContainer />
					</div>
					<p>
						I have extensive experience in developing comprehensive software for customer service
						queue management and administrative projects, utilizing technologies such as Java, PHP,
						and PL/SQL. My expertise lies in problem-solving and implementing testing methods and
						software quality techniques, along with knowlenge in some automation testing tools.
						Currently, I am in the final two semesters of my Systems and Computer Engineering
						degree, pursuing my studies on a part-time basis.
					</p>
				</aside>
				<aside className="card-window" />
				<aside className="card-text">
					<p>
						Thank you for visiting my web portfolio. Here, you can learn more about my professional
						evolution, notable projects, and how my passion for technology has translated into
						tangible results. I hope you enjoy exploring my journey and skills!
					</p>
					<h3 className="search-job">
						{" "}
						<b>CURRENTLY SEEKING TO EXPAND MY PROFESSIONAL HORIZONS.</b>
					</h3>
					<p>
						I am excited to continue growing in the field of software and/or video game development
						and contribute with creative and innovative solutions. If you are looking for a
						passionate professional with technical skills in software or Unity development, please
						do not hesitate to contact me.
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
