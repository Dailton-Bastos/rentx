import styled from 'styled-components';

export const Wrapper = styled.div`
	align-items: center;
	display: flex;
	height: 64px;
	justify-content: flex-start;
	margin-bottom: 1rem;

	&:focus,
	&:hover {
		outline: none;
	}

	.icon {
		align-items: center;
		background-color: var(--color-white);
		border: 1px solid var(--color-gray-light);
		border-right: none;
		display: flex;
		height: 100%;
		justify-content: center;
		width: 71px;
	}

	input {
		background-color: var(--color-white);
		border: 1px solid var(--color-gray-light);
		border-left: none;
		color: var(--color-title);
		height: 100%;
		margin-left: 5px;
		padding: var(--container-space-md);
		transition: 0ms.2s;
		width: 100%;

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
`;
