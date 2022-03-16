import ShopDataItem from 'models/shop-data-item.model'
import React from 'react'
import { connect, MapDispatchToProps } from 'react-redux'
import { addCartItem } from 'redux/cart/cart.actions'
import CustomButton from './custom-button.component'

interface CollectionItemOwnProps {
	item: ShopDataItem
}

type DispatchProps = {
	addCartItemFn: typeof addCartItem
}

type Props = DispatchProps & CollectionItemOwnProps

const mapDispatchToProps: MapDispatchToProps<
	DispatchProps,
	CollectionItemOwnProps
> = dispatch => ({
	addCartItemFn: item => dispatch(addCartItem(item)),
})

function CollectionItem(props: Props) {
	const { item: data, addCartItemFn } = props

	const handleClick = () => {
		addCartItemFn(data)
	}

	return (
		<div className='collection-item min-w-90 max-w-120 flex flex-col flex-1 h-90 items-center relative group'>
			<div
				className='image w-full h-90-perc bg-cover bg-center mb-3 opacity-80 group-hover:opacity-100'
				style={{ backgroundImage: `url(${data.imageUrl})` }}
			/>
			<div className='collection-footer h-10-perc w-full flex space-between text-lg'>
				<span className='name flex-auto'>{data.name}</span>
				<span className='price'>${data.price}</span>
			</div>
			<CustomButton
				classes='absolute w-80-perc opacity-70 bottom-20 group-hover:opacity-100 transition group-hover:flex hidden'
				inverted
				handleClick={handleClick}
			>
				Add to cart
			</CustomButton>
		</div>
	)
}

export default connect(null, mapDispatchToProps)(CollectionItem)
