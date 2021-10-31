import styled from 'styled-components';

export const Wrapper = styled.div`
	display: block;
	margin: 0 auto;
	max-width: var(--breakpoint-xxl);
	padding: 0 var(--container-space-sm);
	width: 100%;

	@media (min-width: 1400px) {
		padding: 0 var(--container-space-xl);
	}
`;
