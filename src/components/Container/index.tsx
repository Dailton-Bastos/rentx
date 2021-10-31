import React from 'react';

import * as S from './styles';

interface ContainerProps {
	children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps): JSX.Element => {
	return <S.Wrapper>{children}</S.Wrapper>;
};
