import { darken } from 'polished';
import styled from 'styled-components';

export const Button = styled.button`
	align-items: center;
	background: var(--color-red);
	border: none;
	color: var(--color-white);
	display: flex;
	font-size: 1.6rem;
	height: 64px;
	justify-content: center;
	transition: all 0.2s;
	width: 100%;

	&:not(:disabled):hover {
		background: ${darken(0.1, '#dc1637')};
	}

	&:disabled {
		opacity: 0.4;
		cursor: wait;
	}
`;
