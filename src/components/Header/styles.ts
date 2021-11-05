import styled from 'styled-components';

export const Header = styled.header`
	background-color: var(--color-white);
	position: fixed;
	padding-left: 80px;
	right: 0;
	top: 0;
	width: 100%;
`;

export const Wrapper = styled.div`
	align-items: center;
	color: var(--color-title);
	display: flex;
	font-family: var(--font-type-2-name);
	font-size: 2rem;
	font-weight: var(--font-type-weight-semibold);
	height: 80px;
	justify-content: space-between;

	aside {
		align-items: center;
		display: flex;
		gap: 1.6rem;
		justify-content: center;

		a {
			font-size: 1.6rem;
			padding: 1rem 0;
		}

		div {
			align-items: center;
			background-color: var(--color-gray-light);
			border-radius: 50%;
			display: flex;
			height: 48px;
			justify-content: center;
			width: 48px;
		}
	}
`;
