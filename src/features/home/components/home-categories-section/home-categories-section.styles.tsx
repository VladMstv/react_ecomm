import styled from 'styled-components'

const HomeCategoriesSection = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	width: 100%;

	& > * {
		height: 50px;
		flex: 1 1 calc(33% - 1rem);

		@media (min-width: 849px) {
			&:nth-last-child(-n + 2) {
				height: 30rem !important;
			}
		}
	}
`

export default HomeCategoriesSection
