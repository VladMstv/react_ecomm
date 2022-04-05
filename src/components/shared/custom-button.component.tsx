import React, { memo, MouseEventHandler, PropsWithChildren } from 'react'

const CustomButtonVariantClasses = {
	default: 'hover:bg-white bg-black text-white hover:text-black',
	inverted: 'hover:bg-black bg-white hover:text-white',
}
type CustomButtonProps = PropsWithChildren<{
	isSubmit?: boolean
	classes?: string
	handleClick: MouseEventHandler
	buttonVariant?: keyof typeof CustomButtonVariantClasses
}>

function CustomButton(props: CustomButtonProps) {
	const { isSubmit, children, classes, handleClick, buttonVariant } = props
	console.log('render button')
	return (
		<button
			type={isSubmit ? 'submit' : 'button'}
			onClick={handleClick}
			className={`custom-button border-2 px-6 py-4 flex justify-center border-black ${classes} ${
				CustomButtonVariantClasses[buttonVariant!]
			}`}
		>
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
