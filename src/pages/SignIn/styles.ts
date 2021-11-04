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
