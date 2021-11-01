import { Link } from 'react-router-dom';

import homeBackgroundCarImage from '../../assets/home_background_car.png';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Container } from '../../components/Container';
import * as S from './styles';

export const Home = (): JSX.Element => {
	return (
		<S.Home>
			<Container>
				<S.Grid>
					<S.Content>
						<Logo />

						<h1>
							Alugue um
							<br />
							carro de maneira
							<br /> simples e fácil
						</h1>
						<p>
							Vários modelos para você dirigir seguro, com conforto e segurança.
						</p>

						<Link to='/catalog'>Começar agora</Link>
					</S.Content>
					<S.Background>
						<img src={homeBackgroundCarImage} alt='White Audi Car' />
					</S.Background>
				</S.Grid>
			</Container>
		</S.Home>
	);
};
