import Product from 'models/product.model'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from 'redux/cart/cart.actions'
import CustomButton from '../shared/custom-button.component'

interface Props {
	product: Product
}

function ProductCard(props: Props) {
	const { product: data } = props

	const dispatch = useDispatch()

	const handleClick = () => {
		dispatch(addItem(data))
	}

	const bgStyle = { backgroundImage: `url(${data.imageUrl})` }

	return (
		<div className='collection-item min-w-90 max-w-120 flex flex-col flex-1 h-90 items-center relative group'>
			<div
				className='image w-full h-90-perc bg-cover bg-center mb-3 opacity-80 group-hover:opacity-100'
				style={bgStyle}
			/>
			<div className='collection-footer h-10-perc w-full flex space-between text-lg'>
				<span className='name flex-auto'>{data.name}</span>
				<span className='price'>${data.price}</span>
			</div>
			<CustomButton
				classes='absolute w-80-perc opacity-70 bottom-20 group-hover:opacity-100 transition group-hover:flex hidden'
				buttonVariant='inverted'
				handleClick={handleClick}
			>
				Add to cart
			</CustomButton>
		</div>
	)
}

export default ProductCard
