import { ReactComponent as IconEmail } from '../../../assets/icon_email.svg';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';
import * as S from './styles';

export const ForgotPassword = (): JSX.Element => {
	return (
		<S.Content>
			<h1>Recuperar senha</h1>
			<p>Insira seu e-mail para receber um link de recuperação</p>

			<S.Form>
				<Input icon={<IconEmail />} type='email' placeholder='E-mail' />

				<Button type='submit'>Login</Button>
			</S.Form>
		</S.Content>
	);
};
