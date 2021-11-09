import React from 'react';

import * as S from './styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	icon: JSX.Element;
	isPassword?: React.HTMLProps<HTMLButtonElement>;
};

export const Input = ({
	icon,
	isPassword,
	...props
}: InputProps): JSX.Element => {
	const [isFocus, setIsFocus] = React.useState<boolean>(false);

	return (
		<S.Wrapper
			onFocus={() => setIsFocus(true)}
			onBlur={() => setIsFocus(false)}
		>
			<div className={`icon ${isFocus ? 'focus' : ''}`}>{icon}</div>
			<input {...props} />
			{isPassword && isPassword}
		</S.Wrapper>
	);
};

Input.defaultProps = {
	isPassword: false
};
