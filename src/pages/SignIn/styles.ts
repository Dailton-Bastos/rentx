import styled from 'styled-components';

import signInBackgroundImage from '../../assets/signin_background.png';

export const SignIn = styled.section`
	align-items: center;
	background-color: var(--color-gray-lighter);
	display: flex;
	height: 100%;
	min-height: calc(100vh - 80px);
	justify-content: center;
	margin-top: 80px;
	width: 100%;
`;

export const Grid = styled.div`
	column-gap: 130px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 0 10rem;
`;

export const Background = styled.div`
	align-items: center;
	background: url(${signInBackgroundImage}) no-repeat center center;
	background-size: contain;
	display: flex;
	height: 100%;
	justify-content: center;
	margin: var(--container-space-sm) 0;
	max-height: 612px;
`;

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

	.forgot__password {
		color: var(--color-text);
		display: inline-block;
		font-size: 1.6rem;
		margin: 1.4rem 0 2.4rem;
	}
`;

export const InputPassword = styled.div`
	align-items: center;
	display: flex;
	justify-content: space-between;

	> div {
		width: 100%;

		input {
			border-right: none;
		}
	}
	button {
		align-items: center;
		background-color: var(--color-white);
		border: 1px solid var(--color-gray-light);
		border-left-color: transparent;
		display: flex;
		height: 64px;
		justify-content: center;
		margin-bottom: 1rem;
		width: 71px;
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
