import React from 'react'
import { useNavigate } from 'react-router-dom'

interface MenuItemProps {
	title: string
	imageUrl: string
	linkUrl: string
}

function MenuItem(props: MenuItemProps): JSX.Element {
	const { title, imageUrl, linkUrl } = props

	const navigate = useNavigate()
	return (
		<button
			type='button'
			className='group menu-item min-w-30-perc flex-auto h-60 flex justify-center 
                cursor-pointer items-center border mt-0 mr-3 mb-7 first:mr-3 relative overflow-hidden'
			// open concrete section
			onClick={() => navigate(linkUrl)}
		>
			<div
				className='w-full h-full bg-center bg-cover absolute group-hover:scale-110 transition-transform duration-700'
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className='content border border-gray-400 p-5 bg-gray-100 bg-opacity-60 hover:bg-opacity-80 transition z-10'>
				<h1 className='title font-semibold'>{title.toUpperCase()}</h1>
				<span className='subtitle'>SHOP NOW</span>
			</div>
		</button>
	)
}

export default MenuItem
