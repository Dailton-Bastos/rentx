import React from 'react';

import * as S from './styles';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	icon: string;
};

export const Input = ({ icon, ...props }: InputProps): JSX.Element => {
	return (
		<S.Wrapper>
			<div className='icon'>
				<img src={icon} alt='Icon' />
			</div>
			<input {...props} />
		</S.Wrapper>
	);
};
