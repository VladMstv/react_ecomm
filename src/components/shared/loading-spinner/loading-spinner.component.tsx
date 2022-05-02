import React from 'react'
import { SpinnerContainer, SpinnerOverlay } from './loading-spinner.styles'

interface SpinnerProps {
	relative?: boolean
	className?: string
	// eslint-disable-next-line react/no-unused-prop-types
	size?: 'sm' | 'md' | 'lg'
}

export function LoadingSpinnerRaw(props: SpinnerProps) {
	const { relative, className } = props
	return relative ? (
		<SpinnerContainer className={`animate-spin ${className}`} />
	) : (
		<SpinnerOverlay>
			<SpinnerContainer className={`animate-spin ${className}`} />
		</SpinnerOverlay>
	)
}

LoadingSpinnerRaw.defaultProps = {
	relative: false,
	className: null,
	size: null,
}

export { LoadingSpinner } from './loading-spinner.styles'

