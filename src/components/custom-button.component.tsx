import React, { MouseEventHandler, PropsWithChildren } from 'react'

type CustomButtonProps = PropsWithChildren<{
	isSubmit?: boolean
	classes?: string
	inverted?: boolean
	handleClick: MouseEventHandler
}>

function CustomButton(props: CustomButtonProps) {
	const { isSubmit, children, classes, handleClick, inverted } = props
	return (
		<button
			type={isSubmit ? 'submit' : 'button'}
			onClick={handleClick}
			className={`custom-button border-2 px-6 py-4 flex justify-center border-black ${classes} ${
				inverted
					? 'hover:bg-black bg-white hover:text-white'
					: 'hover:bg-white bg-black text-white hover:text-black'
			}`}
		>
			{children}
		</button>
	)
}

CustomButton.defaultProps = { isSubmit: false } as Partial<CustomButtonProps>

export default CustomButton
