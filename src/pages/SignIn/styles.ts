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
	padding-left: 80px;
	width: 100%;
`;

export const Grid = styled.div`
	align-items: center;
	column-gap: 130px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

export const Background = styled.div`
	align-items: center;
	background: url(${signInBackgroundImage}) no-repeat center center;
	background-size: contain;
	display: flex;
	height: 612px;
	justify-content: center;
	margin: var(--container-space-sm) 0;
`;
