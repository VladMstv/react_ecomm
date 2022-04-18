import { ShopMainDirSection } from 'models/shop-main-dir-section.model'
import React from 'react'
import SECTIONS_DATA from 'sections.data'
import ShopMainItem from '../shop-main-item/shop-main-item.component'
import DirectoryMenu from './shop-main.styles'

type ShopMainDirState = {
	sections: ShopMainDirSection[]
}

export default class ShopMain extends React.Component<
	unknown,
	ShopMainDirState
> {
	constructor(props: Record<string, any>) {
		super(props)
		this.state = {
			sections: SECTIONS_DATA,
		}
	}

	render() {
		const { sections } = this.state
		return (
			<DirectoryMenu>
				{sections.map(({ id, title, imageUrl, linkUrl }) => (
					<ShopMainItem
						key={id}
						title={title}
						imageUrl={imageUrl}
						linkUrl={linkUrl}
					/>
				))}
			</DirectoryMenu>
		)
	}
}
