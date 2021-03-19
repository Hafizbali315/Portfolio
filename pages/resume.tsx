import Bar from '../components/Bar'
import { languages, tools } from '../data'

const resume = () => {
	return (
		<div className="px-6 py-2">
			{/* Education and Experience */}
			<div className="grid gap-6 md:grid-cols-2">
				<div>
					<h5 className="my-3 text-2xl font-bold">Education</h5>
					<div>
						<h5 className="my-2 text-xl font-bold">Computer Engineering</h5>
						<p className="font-semibold">University of Engineering and Technology Taxila, Pakistan (2018-2022)</p>
						<p className="my-3">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer took a galley of type and
						</p>
					</div>
				</div>

				<div>
					<h5 className="my-3 text-2xl font-bold">Experience</h5>
					<div>
						<h5 className="my-2 text-xl font-bold">Full Stack Web Developer</h5>
						<p className="font-semibold">At Fiverr & Upwork (2 years)</p>
						<p className="my-3">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
							text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
							survived not only five centuries
						</p>
					</div>
				</div>
			</div>

			{/* Languages and tool */}
			<div className="grid gap-6 md:grid-cols-2">
				<div>
					<h5 className="my-3 text-2xl font-bold">Languages & Framework</h5>
					<div className="my-2">
						{languages.map((language) => (
							<Bar data={language} key={language.name} />
						))}
					</div>
				</div>

				<div>
					<h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
					<div className="my-2">
						{tools.map((tool) => (
							<Bar data={tool} key={tool.name} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default resume
