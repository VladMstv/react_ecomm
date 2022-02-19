import { DirectorySection } from 'models/directory-section.model'
import React from 'react'
import MenuItem from './menu-item.component'

type DirectoryState = {
	sections: DirectorySection[]
}

export default class Directory extends React.Component<
	unknown,
	DirectoryState
> {
	constructor(props: unknown) {
		super(props)
		this.state = {
			sections: [
				{
					title: 'hats',
					imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
					id: 1,
					linkUrl: 'shop/hats',
				},
				{
					title: 'jackets',
					imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
					id: 2,
					linkUrl: 'shop/jackets',
				},
				{
					title: 'sneakers',
					imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
					id: 3,
					linkUrl: 'shop/sneakers',
				},
				{
					title: 'womens',
					imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
					size: 'large',
					id: 4,
					linkUrl: 'shop/womens',
				},
				{
					title: 'mens',
					imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
					size: 'large',
					id: 5,
					linkUrl: 'shop/mens',
				},
			],
		}
	}

	render() {
		const { sections } = this.state
		return (
			<div className='directory-menu flex flex-wrap space-between w-full'>
				{sections.map(({ title, id, imageUrl }) => (
					<MenuItem title={title} imageUrl={imageUrl} key={id} />
				))}
			</div>
		)
	}
}
