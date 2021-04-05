import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectsNavbar from '../components/ProjectsNavbar'
import { projects as projectsData } from '../data'
import { Category } from '../type'
import { motion } from 'framer-motion'
import { routeAnimation, stagger } from '../animations'
import { fadeInUp } from './../animations'

const Projects = () => {
	const [projects, setProjects] = useState(projectsData)
	const [active, setActive] = useState('all')

	const handleFilterCategory = (category: Category | 'all') => {
		if (category === 'all') {
			setProjects(projectsData)
			setActive(category)
			return
		}

		const newArray = projectsData.filter((project) => project.category.includes(category))
		setProjects(newArray)
		setActive(category)
	}

	return (
		<motion.div
			className="px-5 py-2 overflow-y-scroll"
			style={{ height: '70vh' }}
			variants={routeAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<ProjectsNavbar handleFilterCategory={handleFilterCategory} active={active} />

			<motion.div className="relative grid grid-cols-12 gap-4 my-3" variants={stagger} initial="initial" animate="animate">
				{projects.map((project) => (
					<motion.div
						className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
						key={project.name}
						variants={fadeInUp}
					>
						<ProjectCard project={project} />
					</motion.div>
				))}
			</motion.div>
		</motion.div>
	)
}

export default Projects
