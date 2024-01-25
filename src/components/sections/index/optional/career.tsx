
// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss'


export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`} sectionId="experience">
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am a Frontend Developer proficient in React js, Next js and Laravel Framework, currently working in the project development field. My primary goal is to enhance my skills and expand my knowledge to gain valuable experience in complex project development. I am dedicated to continuously improving and staying updated with the latest advancements in the industry."
				/>
				<section className={career.area}>
					<div className={career.position}>

						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>Genhive (PTY) Ltd</h3>
								<h4>Permanent Full Time · May 2022 - Present</h4>
							</span>
							<p>
								As a Software Engineer at Genhive, my current focus lies in the field of complex project development. I am committed to continuously enhancing my skills and expanding my knowledge to gain valuable experience in this domain.
							</p>
							
							<p>
								I am responsible for translating creative concepts into responsive and intuitive web applications. My role involves collaborating closely with UI/UX designers and back-end developers to implement cutting-edge frontend solutions. Leveraging my expertise in HTML, CSS, and JavaScript frameworks (React), I ensure the efficient execution of design specifications while maintaining a high standard of code quality and performance.
							</p>
						</div>
						<div className={career.companyAlt}></div>

					</div>
				</section>

				<section className={career.area}>
					<div className={career.position}>

						<div className={career.companyContent}>
							<span className={career.companyHeader}>
								<h3>CipherCode Design Studio</h3>
								<h4>Permanent Full Time · Nov 2019 - May 2022</h4>
							</span>
							<p>
								As a Frontend Web Developer at CipherCode Design Studios, I played a pivotal role in shaping the user experience and interface of our cutting-edge web applications. Collaborating closely with cross-functional teams, I translated design concepts into responsive and visually appealing user interfaces. Leveraging my expertise in JavaScript and React JS, I implemented interactive features and optimized site performance to ensure seamless navigation.
							</p>

							<p>
								My responsibilities extended to maintaining code integrity and ensuring compatibility across various browsers and devices. I actively participated in design reviews, offering insights on usability and contributing to the continuous improvement of our products. My commitment to staying abreast of industry trends and emerging technologies facilitated the integration of innovative solutions, enhancing the overall functionality and aesthetic of our front end systems.
							</p>

							<p>
								In this dynamic role, I thrived on problem-solving, continuously seeking opportunities to enhance the user experience and elevate the visual identity of our web applications. My dedication to delivering high-quality, scalable code significantly contributed to the success of our projects and the satisfaction of our user base.
							</p>
						</div>
						<div className={career.companyAlt}></div>

					</div>
				</section>
			</Container>

		</Section >

	)
}
