import iconProfile from '../../assets/icon_profile.png';
import { Container } from '../Container';
import * as S from './styles';

interface HeaderProps {
	title: string;
}

export const Header = ({ title }: HeaderProps): JSX.Element => {
	return (
		<>
			<S.Header>
				<Container>
					<S.Wrapper>
						<span>{title}</span>
						<aside>
							<a href='/login'>Faça login</a>
							<div>
								<img src={iconProfile} alt='Faça login' />
							</div>
						</aside>
					</S.Wrapper>
				</Container>
			</S.Header>
		</>
	);
};
