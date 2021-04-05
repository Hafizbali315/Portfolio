import { IconType } from 'react-icons'

export interface IServices {
	Icon: IconType
	title: string
	about: string
}

export interface ISkill {
	name: string
	level: string
	Icon: IconType
}

export interface IProject {
	id: number
	name: string
	description: string
	image_path: string
	deployed_url: string
	github_url: string
	category: Category[]
	key_techs: string[]
}
export type Category = 'react' | 'node' | 'mongo' | 'socket' | 'django' | 'express' | 'ml' | 'vanilla'
