import ShopDataCategory from 'models/shop-data-category.model'
import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './product-card.component'

type PreviewCollectionProps = {
	[Property in keyof Pick<
		ShopDataCategory,
		'items' | 'title'
	>]: ShopDataCategory[Property]
}

function CategoryPreview(props: PreviewCollectionProps): JSX.Element {
	const { title, items } = props
	const titleUpper = useMemo(() => title.toUpperCase(), [title])
	const titleLower = title.toLowerCase()
	return (
		<div className='collection-preview mb-10'>
			<Link className='flex text-3xl font-semibold mb-10' to={titleLower}>
				{titleUpper}
			</Link>
			<div className='preview flex gap-5 justify-evenly md:justify-start flex-wrap'>
				{items
					.filter((_, idx) => idx < 4)
					.map(item => (
						<ProductCard key={item.id} product={item} />
					))}
			</div>
		</div>
	)
}

export default CategoryPreview
