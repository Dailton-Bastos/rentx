import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import iconEmail from '../../../assets/icon_email.png';
import iconPassword from '../../../assets/icon_password.png';
import { ReactComponent as IconViewPassword } from '../../../assets/icon_view_password.svg';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import * as S from './styles';

export const Login = (): JSX.Element => {
	const [viewPassword, setViewPassword] = React.useState(false);

	const { url } = useRouteMatch();

	return (
		<S.Content>
			<h1>Estamos quase lá.</h1>
			<p>Faça seu login para começar uma experiência incrível.</p>

			<S.Form>
				<Input icon={iconEmail} type='email' placeholder='E-mail' />
				<S.InputPassword>
					<Input
						icon={iconPassword}
						type={viewPassword ? 'text' : 'password'}
						placeholder='Senha'
					/>
					<button type='button' onClick={() => setViewPassword(!viewPassword)}>
						<IconViewPassword />
					</button>
				</S.InputPassword>

				<Link className='forgot__password' to={`${url}/forgot`}>
					Esqueci minha senha
				</Link>

				<Button type='submit'>Login</Button>

				<S.SignUpButton>
					<Link to='/signup'>Criar conta gratuita</Link>
				</S.SignUpButton>
			</S.Form>
		</S.Content>
	);
};
