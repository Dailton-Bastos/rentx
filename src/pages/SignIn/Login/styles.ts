import styled from 'styled-components';

export const Content = styled.div`
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

	.forgot__password {
		color: var(--color-text);
		display: inline-block;
		font-size: 1.6rem;
		margin: 1.4rem 0 2.4rem;
	}
`;

export const SignUpButton = styled.div`
	border: 1px solid #dedee3;
	margin-top: 16px;
	transition: all 0.2s;
	width: 100%;

	&:hover {
		border-color: transparent;
		box-shadow: 0 0 0 2px var(--color-red);
	}

	a {
		align-items: center;
		color: var(--color-title);
		display: flex;
		font-size: 1.6rem;
		height: 64px;
		justify-content: center;
		width: 100%;
	}
`;
