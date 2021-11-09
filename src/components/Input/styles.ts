import styled from 'styled-components';

export const Wrapper = styled.div`
	align-items: center;
	border: 1px solid var(--color-gray-light);
	display: flex;
	height: 64px;
	justify-content: flex-start;
	margin-bottom: 1rem;
	transition: all 0.2s;

	&:focus,
	&:hover {
		border-color: transparent;
		box-shadow: 0 0 0 1px #aeaeb3;
		outline: none;
	}

	.icon {
		align-items: center;
		background-color: var(--color-white);
		border-right: none;
		display: flex;
		height: 100%;
		justify-content: center;
		position: relative;
		width: 71px;

		&::after {
			content: '';
			background-color: var(--color-gray-lighter);
			height: 40px;
			position: absolute;
			right: 0;
			transform: translateY(10px);
			top: 0;
			width: 2px;
		}

		&.focus {
			svg {
				path {
					fill: var(--color-red);
				}
			}
		}
	}

	input {
		background-color: var(--color-white);
		border: none;
		color: var(--color-title);
		flex: 1;
		font-size: 1.6rem;
		height: 100%;
		padding: var(--container-space-md);
		transition: 0ms.2s;

		&::placeholder {
			color: var(--color-text-details);
			font-size: 1.6rem;
			font-weight: var(--font-type-weight-regular);
		}

		&:focus,
		&:hover {
			outline: none;
		}

		&[type='password'] {
			border-right: none;
		}
	}

	button {
		align-items: center;
		background-color: var(--color-white);
		border: none;
		border-left-color: transparent;
		display: flex;
		height: 100%;
		justify-content: center;
		width: 71px;
	}
`;
