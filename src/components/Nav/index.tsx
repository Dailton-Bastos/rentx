import { ReactComponent as IconHome } from '../../assets/icon_catalog.svg';
import { ReactComponent as IconFilter } from '../../assets/icon_filter.svg';
import { ReactComponent as IconLogin } from '../../assets/icon_login.svg';
import navigationLogo from '../../assets/navigation_logo.png';
import * as S from './styles';

export const Navigation = (): JSX.Element => {
	return (
		<>
			<S.Navigation>
				<div className='logo'>
					<img src={navigationLogo} alt='Navigation' />
				</div>

				<S.Wrapper>
					<ul>
						<li>
							<a className='active' href='/catalog'>
								<IconHome />
							</a>
						</li>
						<li>
							<a href='/filter'>
								<IconFilter />
							</a>
						</li>
						<li>
							<a href='/login'>
								<IconLogin />
							</a>
						</li>
					</ul>
				</S.Wrapper>
			</S.Navigation>
		</>
	);
};
