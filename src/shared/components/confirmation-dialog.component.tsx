import React, { PropsWithChildren, useCallback } from 'react'
import CustomButtonComponent from './custom-button.component'
import Dialog, { DialogProps } from './dialog.component'

interface ConfirmationActionButtonSettings {
	label: string
}

type ConfirmationDialogProps = Pick<DialogProps, 'title'> & {
	handleClose: (result: boolean) => void
	okButton: ConfirmationActionButtonSettings | undefined
	cancelButton: ConfirmationActionButtonSettings | undefined
}

export default function ConfirmationDialog({
	handleClose,
	title,
	children,
	okButton = undefined,
	cancelButton = undefined,
}: PropsWithChildren<ConfirmationDialogProps>) {
	const handleCloseFactory = useCallback((confirm: boolean) => () => handleClose(confirm), [])

	return (
		<Dialog
			title={title}
			handleClose={handleCloseFactory(false)}
			actions={ 
				<>
					<CustomButtonComponent buttonVariant='default' handleClick={handleCloseFactory(true)}>
						{okButton?.label || 'Ok'}
					</CustomButtonComponent>
					<CustomButtonComponent buttonVariant='inverted' handleClick={handleCloseFactory(false)}>
						{cancelButton?.label || 'Cancel'}
					</CustomButtonComponent>
				</>
			}
		>
			{children}
		</Dialog>
	)
}
