import styled from 'styled-components';

export const Content = styled.div`
	padding: calc(var(--container-space-lg) - 10px) 0;

	h1 {
		color: #41414d;
		font-size: 3.6rem;
		font-weight: var(--font-type-weight-semibold);
		margin-bottom: 2.4rem;
	}

	p {
		color: #7a7a80;
		font-size: 1.6rem;
		line-height: 26px;
		max-width: 254px;
		width: 100%;
	}
`;

export const Form = styled.form`
	margin-top: 40px;
	max-width: 384px;
	width: 100%;

	button {
		margin-top: 1.4rem;
	}
`;
