import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './loading-spinner.styles'

function LoadingSpinner() {
	return (
		<SpinnerOverlay>
			<SpinnerContainer className='animate-spin' />
		</SpinnerOverlay>
	)
}

export default LoadingSpinner
