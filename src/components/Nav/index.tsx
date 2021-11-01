import { NavLink } from 'react-router-dom';

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
							<NavLink to='/catalog'>
								<IconHome />
							</NavLink>
						</li>
						<li>
							<NavLink to='/filter'>
								<IconFilter />
							</NavLink>
						</li>
						<li>
							<NavLink to='/login'>
								<IconLogin />
							</NavLink>
						</li>
					</ul>
				</S.Wrapper>
			</S.Navigation>
		</>
	);
};
