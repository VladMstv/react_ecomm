import styled from 'styled-components'

const DirectoryMenu = styled('div')`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;
	width: 100%;

	& > * {
		height: 50px;
		margin: 0.5rem;
		flex: 1 1 calc(33% - 1rem);

		@media (min-width: 1280px) {
			&:nth-last-child(-n + 2) {
                height: 30rem !important;
			}
		}
	}
`

export default DirectoryMenu
