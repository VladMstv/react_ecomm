import React, { PropsWithChildren } from 'react'
import ReactDOM from 'react-dom'
import usePortalTarget from 'shared/hooks/useportal.hook'
import { XMarkIcon } from '@heroicons/react/24/solid'

export interface DialogProps {
	title?: string
	actions?: JSX.Element
	handleClose: () => void
}

export default function Dialog(props: PropsWithChildren<DialogProps>) {
	const { children, title, handleClose, actions } = props
	const portalTarget = usePortalTarget('modal-dialog')

	return ReactDOM.createPortal(
		<div className='modal-overlay fixed top-0 bottom-0 right-0 left-0 flex items-center justify-center bg-gray-100 bg-opacity-70 z-50'>
			<section className='flex flex-col min-w-100 border rounded bg-white'>
				<header className='flex items-center justify-between px-4 py-3 text-lg border-bottom'>
					<div className='text-md font-semibold'>{title}</div>
					<XMarkIcon
						className='w-5 h-5 ml-auto cursor-pointer'
						onClick={() => handleClose()}
					/>
				</header>
				<div className='flex flex-col p-4 text-md'>{children}</div>
				{actions && (
					<div className='flex items-center justify-end p-4 gap-4'>{actions}</div>
				)}
			</section>
		</div>,
		portalTarget!
	)
}
