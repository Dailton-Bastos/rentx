import React from 'react';

import * as S from './styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ ...props }: ButtonProps): JSX.Element => {
	return <S.Button {...props} />;
};
