import styled from 'styled-components';

export const Navigation = styled.nav`
	background-color: var(--background);
	height: 100%;
	min-height: 100vh;
	left: 0;
	position: fixed;
	top: 0;
	width: 80px;

	.logo {
		background-color: var(--color-red);
		align-items: center;
		display: flex;
		height: 80px;
		justify-content: center;
		width: 100%;
	}
`;

export const Wrapper = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	height: calc(100% - 80px);
	justify-content: center;
	width: 100%;

	ul {
		width: 100%;
		li {
			margin: 1rem 0;
			a {
				align-items: center;
				display: flex;
				height: 54px;
				justify-content: center;
				position: relative;
				transition: all 0.2s;
				width: 100%;

				&:hover,
				&.active {
					background-color: #000;
					svg {
						path {
							fill: #fff;
						}
					}
				}

				&.active {
					&::before {
						background-color: var(--color-red);
						content: '';
						height: 100%;
						left: 0;
						position: absolute;
						top: 0;
						width: 3px;
					}
				}
			}
		}
	}
`;
