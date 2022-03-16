import ShopDataSection from 'models/shop-data-section.model'
import React from 'react'
import CollectionItem from './collection-item.component'

type PreviewCollectionProps = {
	[Property in keyof Pick<
		ShopDataSection,
		'items' | 'title'
	>]: ShopDataSection[Property]
}

function PreviewCollection(props: PreviewCollectionProps): JSX.Element {
	const { title, items } = props
	return (
		<div className='collection-preview mb-5'>
			<h1 className='text-3xl font-semibold mb-5'>{title.toUpperCase()}</h1>
			<div className='preview flex gap-5 justify-between flex-wrap'>
				{items
					.filter((_, idx) => idx < 4)
					.map(item => (
						<CollectionItem key={item.id} item={item} />
					))}
			</div>
		</div>
	)
}

export default PreviewCollection
