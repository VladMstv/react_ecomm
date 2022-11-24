import { addItem } from 'features/cart/state/cart.actions'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ConfirmationDialog from 'shared/components/confirmation-dialog.component'
import CustomButton from 'shared/components/custom-button.component'
import Product from 'shared/models/product.model'

interface Props {
	product: Product
}

function ProductCard(props: Props) {
	const [isConfirmationDialogOpen, setConfirmationDialogOpen] = useState(false)
	const { product: data } = props

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleAddToCart = () => {
		dispatch(addItem(data))
		setConfirmationDialogOpen(true)
	}

	const bgStyle = { backgroundImage: `url(${data.imageUrl})` }

	const handleConfirmationDialogClose = (result: boolean) => {
		setConfirmationDialogOpen(false)

		if (result) {
			navigate('/checkout')
		}
	}

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
				handleClick={handleAddToCart}
			>
				Add to cart
			</CustomButton>

			{isConfirmationDialogOpen ? (
				<ConfirmationDialog
					title='Item was added to the cart'
					handleClose={handleConfirmationDialogClose}
					okButton={{ label: 'Checkout' }}
					cancelButton={{ label: 'Continue shopping' }}
				>
					Would you like to go to checkout?
				</ConfirmationDialog>
			) : null}
		</div>
	)
}

export default ProductCard
