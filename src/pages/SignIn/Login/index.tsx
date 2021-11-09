import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { ReactComponent as IconEmail } from '../../../assets/icon_email.svg';
import { ReactComponent as IconPassword } from '../../../assets/icon_password.svg';
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
				<Input icon={<IconEmail />} type='email' placeholder='E-mail' />

				<Input
					icon={<IconPassword />}
					type={viewPassword ? 'text' : 'password'}
					placeholder='Senha'
					isPassword={
						<button
							type='button'
							onClick={() => setViewPassword(!viewPassword)}
						>
							<IconViewPassword />
						</button>
					}
				/>

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
