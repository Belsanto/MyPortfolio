import "./ProfesionalCardItem.css"
import ExperienceFlow from "../../containers/ExperienceFlow/ExperienceFlow"

const workExperience = [
	{
		id: 1,
		position: "Software Developer",
		company: "Technologies of Colombia",
		startDate: "January 2023",
		endDate: "June 2023",
		time: "6 months",
		description: `	- Collaborated on a JAVA project involving the creation of SOAP services.
						- Developed, integrated, optimized, and conducted thorough manual testing of over different modules of clinical software using APEX, contributing to the creation of PL/SQL functions/procedures and employing advanced querying techniques.
						- Provided support and guidance users for code-related errors and software usage.
						- Successfully collaborated with different oncological companies in the country for software implementation changes and bug fixes.`,
		certify: "https://www.linkedin.com/in/belsanto/details/experience/",
		skills: ["JavaScript", "CSS", "Oracle SQL", "APEX", "PL/SQL", "Java", "SOAP"],
	},
	{
		id: 2,
		position: "Software Programming Technician",
		company: "Multipurpose Company of Calarcá",
		startDate: "September 2018",
		endDate: "March 2019",
		time: "6 months",
		description:
			"-I designed and fully developed a functional software solution using HTML, JAVA, and MySQL for the customer service department, enhancing the efficiency of departmental operations and enabling faster and more accurate customer service. -I designed and implemented an internal corporate website with WordPress that improved the productivity of 70% of the company's work teams, reducing the time spent searching for information on corporate events. -I identified and corrected 10 code defects in PHP based applications, leading to notable improvements in the work efficiency of approximately 80% of the area staff.",
		certify: "https://www.linkedin.com/in/belsanto/details/experience/",
		skills: ["Java SE", "MySQL", "PHP", "CSS", "HTML", "WordPress"],
	},
]

function ProfesionalCardItem() {
	return (
		<div className="card card-section">
			<section className="card-title">
				<h1 className="big-tittle">Professional Work Experience</h1>
			</section>
			<ExperienceFlow experiences={workExperience} />
		</div>
	)
}

export { ProfesionalCardItem }
