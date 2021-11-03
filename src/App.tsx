import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Catalog } from './pages/Catalog';
import { Home } from './pages/Home';
import { SignIn } from './pages/SignIn';
import { GlobalStyle } from './styles/global';

export const App = (): JSX.Element => {
	return (
		<Router>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>

				<Route path='/catalog'>
					<Catalog />
				</Route>

				<Route path='/login'>
					<SignIn />
				</Route>
			</Switch>
			<GlobalStyle />
		</Router>
	);
};
