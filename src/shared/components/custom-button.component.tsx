import React, { memo, MouseEventHandler, PropsWithChildren } from 'react'
import { LoadingSpinner } from './loading-spinner/loading-spinner.component'

const CustomButtonVariantClasses = {
	default: 'hover:bg-opacity-100 bg-opacity-70 bg-black text-white border-transparent',
	inverted: 'bg-white border-gray-400 hover:border-black',
}

type CustomButtonProps = PropsWithChildren<{
	isSubmit: boolean
	classes: string
	handleClick: MouseEventHandler
	buttonVariant: keyof typeof CustomButtonVariantClasses
	isLoading: boolean
}>

function CustomButton({
	isSubmit = false,
	children,
	classes = '',
	handleClick,
	buttonVariant = 'default',
	isLoading = false,
}: Partial<CustomButtonProps>) {
	return (
		<button
			type={isSubmit ? 'submit' : 'button'}
			onClick={handleClick}
			disabled={isLoading}
			className={`shadow active:shadow-lg border-2 border-opacity-70 px-4 py-2 flex justify-center ${classes} ${CustomButtonVariantClasses[buttonVariant]} transition`}
		>
			{isLoading ? <LoadingSpinner className='mr-3' size='sm' /> : null}

			{children}
		</button>
	)
}

export default memo(CustomButton)
