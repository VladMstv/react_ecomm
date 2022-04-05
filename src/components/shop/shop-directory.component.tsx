import { DirectorySection } from 'models/directory-section.model'
import React from 'react'
import SECTIONS_DATA from 'sections.data'
import MenuItem from '../layout/menu-item.component'

type DirectoryState = {
	sections: DirectorySection[]
}

export default class ShopDirectory extends React.Component<
	unknown,
	DirectoryState
> {
	constructor(props: unknown) {
		super(props)
		this.state = {
			sections: SECTIONS_DATA,
		}
	}

	render() {
		const { sections } = this.state
		return (
			<div className='directory-menu flex flex-wrap space-between w-full'>
				{sections.map(({ id, title, imageUrl, linkUrl }) => (
					<MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
				))}
			</div>
		)
	}
}
