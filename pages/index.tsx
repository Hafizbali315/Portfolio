// import { GetServerSideProps, GetServerSidePropsContext, GetStaticProps, GetStaticPropsContext, NextPage } from 'next'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animations'
import { routeAnimation } from './../animations'

const index = () => {
	return (
		<motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
			<h5 className="my-3 font-medium">
				I am currently pursuing Bachelor Degree(Final Year) in Computer Engineering from University of Engineering and Technology Taxila,
				Pakistan. I have 3+ years of experience in Web Development. My experties are listed below.
			</h5>
			<div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 " style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
				<h4 className="pb-5 my-3 text-xl font-semibold tracking-wide">What I am Offer</h4>

				<motion.div className="grid gap-6 my-3 lg:grid-cols-2" variants={stagger} initial="initial" animate="animate">
					{/* children's initial and animate property should be same as the parent during a stagger effect  */}
					{services.map((service) => (
						<motion.div variants={fadeInUp} className="bg-gray-200 rounded-lg lg:col-span-1 dark:bg-dark-200" key={service.title}>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.div>
	)
}

//?   called every time  the page refreshed

// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

//?>>>>  called only during the build of the project

//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//    // console.log(context);

//    const res = await fetch('http://localhost:3000/api/services')
//    const { services } = await res.json()
//    console.log({ services })
//    return { props: { services: services } }
// }

export default index
