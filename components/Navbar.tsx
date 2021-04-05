import { FunctionComponent, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const NavItem: FunctionComponent<{
	activeItem: string
	setActiveItem: Function
	name: string
	route: string
}> = ({ activeItem, setActiveItem, name, route }) => {
	return activeItem !== name ? (
		<Link href={route}>
			<a>
				<span className="hover:text-green" onClick={() => setActiveItem(name)}>
					{name}
				</span>
			</a>
		</Link>
	) : null
}

const Navbar = () => {
	const [activeItem, setActiveItem] = useState<string>('')

	const { pathname } = useRouter()

	useEffect(() => {
		if (pathname === '/') setActiveItem('About')
		if (pathname === '/projects') setActiveItem('Projects')
		if (pathname === '/resume') setActiveItem('Resume')
	}, [])

	return (
		<div className="flex justify-between px-5 py-3 my-3">
			<span className="text-xl font-bold border-b-4 border-green md:text-2xl">{activeItem}</span>
			<div className="flex space-x-5 text-lg font-bold ">
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} route="/" name="About" />
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} route="/projects" name="Projects" />
				<NavItem activeItem={activeItem} setActiveItem={setActiveItem} route="/resume" name="Resume" />
			</div>
		</div>
	)
}

export default Navbar
