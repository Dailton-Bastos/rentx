import { darken } from 'polished';
import styled from 'styled-components';

import homeBackgroundImage from '../../assets/home_background.png';

export const Home = styled.section`
	align-items: center;
	background-color: var(--background);
	display: flex;
	justify-content: center;
	min-height: 100vh;
	width: 100%;
`;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 0 10rem;
`;

export const Content = styled.div`
	color: var(--color-white);
	padding: calc(var(--container-space-lg) - 10px) 0;

	h1 {
		font-size: 5.4rem;
		margin: 12rem 0 3.2rem;
	}

	p {
		font-size: 2rem;
		font-family: var(--font-type-2-name);
		line-height: 30px;
		max-width: 331px;
		margin-bottom: 6.4rem;
		width: 100%;
	}

	a {
		align-items: center;
		background-color: var(--color-red);
		display: flex;
		font-size: 1.8rem;
		height: 80px;
		justify-content: center;
		transition: all 0.2s;
		width: 292px;

		&:hover {
			background-color: ${darken(0.1, '#dc1637')};
		}
	}
`;

export const Background = styled.div`
	align-items: center;
	background: url(${homeBackgroundImage}) no-repeat center center;
	background-size: contain;
	display: flex;
	justify-content: center;
	margin: var(--container-space-sm) 0;
`;
