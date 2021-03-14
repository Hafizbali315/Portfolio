import Image from 'next/image'
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { GiTie } from 'react-icons/gi'

const Sidebar = () => {
	return (
		<div>
			<Image src="/profilePic.jpg" alt="profilepic" width={200} height={200} className="w-32 h-32 mx-auto rounded-full" />
			<h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
				<span className="text-green">Muhammad</span> Bilal
			</h3>
			<p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>

			<a className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full" href="" download="name">
				<GiTie className="w-6 h-6" /> Download Resume
			</a>

			{/* Social Icons */}
			<div className="flex justify-around w-9/12 mx-auto text-green md:w-full">
				<a href="#">
					<AiFillGithub className="w-8 h-8 cursor-pointer hover:text-green-700 " />
				</a>
				<a href="#">
					<AiFillLinkedin className="w-8 h-8 cursor-pointer hover:text-green-700" />
				</a>
				<a href="#">
					<AiFillFacebook className="w-8 h-8 cursor-pointer hover:text-green-700" />
				</a>
			</div>

			{/* Address */}
			<div className="py-4 my-5 bg-gray-200" style={{ marginLeft: '-1rem', marginRight: '-1rem' }}>
				<div className="flex items-center justify-center space-x-2">
					<GoLocation className="text-green" />
					<span>Talagang, Pakistan</span>
				</div>
				<p className="my-2">hafizbali315@gmail.com</p>
				<p className="my-2">+92 316 8849904</p>
			</div>

			{/* Email button */}
			<button
				className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none hover:bg-gradient-to-r hover:from-blue-400 hover:to-green"
				onClick={() => window.open('mailto: hafizbali315@gmail.com ')}
			>
				Email Me
			</button>
			<button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none hover:bg-gradient-to-r hover:from-blue-400 hover:to-green">
				Toggle Theme
			</button>
		</div>
	)
}

export default Sidebar
