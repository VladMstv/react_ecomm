import styled from 'styled-components'

interface HeaderStyleProps {
	isSticky: boolean
}

export const HeaderInitialPaddingTopRem = 2.5

const Header = styled.div<HeaderStyleProps>`
	${props =>
		props.isSticky
			? {
					position: 'sticky',
					top: `0`,
					borderBottomWidth: '1px',
                    paddingBottom: 0
			  }
			: {
					paddingTop: `${HeaderInitialPaddingTopRem}rem`,
                    paddingBottom: '1px'
			  }}
	justify-content: space-between;
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	margin-bottom: 1.25rem;
	z-index: 1;
	background: white;
`
export default Header
