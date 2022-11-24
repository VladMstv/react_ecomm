import ShopDataCategory from 'features/shop/models/shop-data-category.model'
import React from 'react'
import { Link } from 'react-router-dom'
import CategorySection from '../category-section.component'
import ProductCard from '../product-card.component'

type PreviewCollectionProps = {
	[Property in keyof Pick<
		ShopDataCategory,
		'items' | 'title'
	>]: ShopDataCategory[Property]
}

function CategoryPreview(props: PreviewCollectionProps): JSX.Element {
	const { title, items } = props
	const titleUpper = title.toUpperCase()
	const titleLower = title.toLowerCase()
	return (
		<CategorySection title={title} titleIsLink={true}>
			{items
				.filter((_, idx) => idx < 4)
				.map(item => (
					<ProductCard key={item.id} product={item} />
				))}
		</CategorySection>
	)
}

export default CategoryPreview
