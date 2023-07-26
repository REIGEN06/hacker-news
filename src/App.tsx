import CustomRouter from '@components/CustomRouter';
import { LayoutWrapper } from '@ui/PageWrappers';
import Theme from '@ui/Theme';

const App = () => {
	return (
		<Theme>
			<LayoutWrapper>
				<CustomRouter />
			</LayoutWrapper>
		</Theme>
	);
};

export default App;
