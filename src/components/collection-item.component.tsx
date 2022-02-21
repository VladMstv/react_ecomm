import ShopDataItem from 'models/shop-data-item.model'
import React from 'react'

interface CollectionItemProps {
	data: ShopDataItem
}

function CollectionItem(props: CollectionItemProps) {
	const { data } = props
	return (
		<div className='collection-item min-w-90 max-w-120 flex flex-col flex-1 h-90 items-center'>
			<div
				className='image w-full h-90-perc bg-cover bg-center mb-3'
				style={{ backgroundImage: `url(${data.imageUrl})` }}
			/>
			<div className='collection-footer h-10-perc w-full flex space-between text-lg'>
				<span className='name flex-auto'>{data.name}</span>
				<span className='price'>{data.price}</span>
			</div>
		</div>
	)
}

export default CollectionItem
