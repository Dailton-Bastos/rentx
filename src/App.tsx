import { Catalog } from './pages/Catalog';
import { GlobalStyle } from './styles/global';

export const App = (): JSX.Element => {
	return (
		<>
			<Catalog />

			<GlobalStyle />
		</>
	);
};
