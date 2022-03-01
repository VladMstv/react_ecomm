import React, { MouseEventHandler, PropsWithChildren } from 'react'

type CustomButtonProps = PropsWithChildren<{
	isSubmit?: boolean
	classes?: string
	handleClick: MouseEventHandler
}>

function CustomButton(props: CustomButtonProps) {
	const { isSubmit, children, classes, handleClick } = props
	return (
		<button
			type={isSubmit ? 'submit' : 'button'}
			onClick={handleClick}
			className={`custom-button border-2 border-black hover:bg-white bg-black text-white hover:text-black px-6 py-4 ${classes}`}
		>
			{children}
		</button>
	)
}

CustomButton.defaultProps = { isSubmit: false } as Partial<CustomButtonProps>

export default CustomButton
