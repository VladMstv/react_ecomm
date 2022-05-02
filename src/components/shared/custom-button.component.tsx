import React, { memo, MouseEventHandler, PropsWithChildren } from 'react'
import { LoadingSpinner } from './loading-spinner/loading-spinner.component'

const CustomButtonVariantClasses = {
	default: 'hover:bg-white bg-black text-white hover:text-black',
	inverted: 'hover:bg-black bg-white hover:text-white',
}
type CustomButtonProps = PropsWithChildren<{
	isSubmit?: boolean
	classes?: string
	handleClick: MouseEventHandler
	buttonVariant?: keyof typeof CustomButtonVariantClasses
	isLoading?: boolean
}>

function CustomButton(props: CustomButtonProps) {
	const { isSubmit, children, classes, handleClick, buttonVariant, isLoading } =
		props
	return (
		<button
			type={isSubmit ? 'submit' : 'button'}
			onClick={handleClick}
			disabled={isLoading}
			className={`custom-button border-2 px-6 py-4 flex justify-center border-black ${classes} ${
				CustomButtonVariantClasses[buttonVariant!]
			}`}
		>
			{isLoading ? <LoadingSpinner className='mr-3' size='sm' relative /> : null}

			{children}
		</button>
	)
}

CustomButton.defaultProps = {
	isSubmit: false,
	buttonVariant: 'default',
	classes: '',
} as Partial<CustomButtonProps>

export default memo(CustomButton)
