import { useRouteMatch, Switch, Route } from 'react-router-dom';

import homeBackgroundCarImage from '../../assets/home_background_car.png';
import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { Navigation } from '../../components/Nav';
import { ForgotPassword } from './ForgotPassword';
import { Login } from './Login';
import * as S from './styles';

export const SignIn = (): JSX.Element => {
	const { path } = useRouteMatch();

	return (
		<>
			<Header title='Perfil' />
			<Navigation />
			<S.SignIn>
				<Container>
					<S.Grid>
						<S.Background>
							<img src={homeBackgroundCarImage} alt='White Audi Car' />
						</S.Background>

						<Switch>
							<Route exact path={path}>
								<Login />
							</Route>

							<Route path={`${path}/forgot`}>
								<ForgotPassword />
							</Route>
						</Switch>
					</S.Grid>
				</Container>
			</S.SignIn>
		</>
	);
};
