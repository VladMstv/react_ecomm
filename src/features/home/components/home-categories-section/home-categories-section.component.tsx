import { HomeCategory } from 'features/home/models/home-category'
import React from 'react'
import SECTIONS_DATA from 'sections.data'
import HomeCategoryComponent from '../home-category/home-category.component'
import HomeCategoriesSection from './home-categories-section.styles'

type HomeCategoriesSectionState = {
	sections: HomeCategory[]
}

export default class HomeCategoriesSectionComponent extends React.Component<
	unknown,
	HomeCategoriesSectionState
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
			<HomeCategoriesSection className=''>
				{sections.map(({ id, title, imageUrl, linkUrl }) => (
					<HomeCategoryComponent
						key={id}
						title={title}
						imageUrl={imageUrl}
						linkUrl={linkUrl}
					/>
				))}
			</HomeCategoriesSection>
		)
	}
}
