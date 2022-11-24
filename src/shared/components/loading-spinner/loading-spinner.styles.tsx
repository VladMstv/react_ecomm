import styled, { css } from 'styled-components'
import { LoadingSpinnerRaw } from './loading-spinner.component'

export const SpinnerOverlay = styled.div`
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	background: rgba(255, 255, 255, 0.3);
`

export const SpinnerContainer = styled.div`
	display: inline-block;
	width: 50px;
	height: 50px;
	border: 3px solid rgba(195, 195, 195, 0.6);
	border-radius: 50%;
	border-top-color: #636767;
`

export const LoadingSpinner = styled(LoadingSpinnerRaw)`
	${props =>
		props.size === 'sm'
			? css`
					width: 25px;
					height: 25px;
			  `
			: null};
`
