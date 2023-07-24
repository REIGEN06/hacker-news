import StoriesList from '../components/StoriesList';
import { DefaultPageWrapper } from '../ui/PageWrappers';
import { Title } from '../ui/Text';

const MainPage = () => {
	return (
		<DefaultPageWrapper>
			<Title>Страница свежих новостей</Title>
			<StoriesList />
		</DefaultPageWrapper>
	);
};

export default MainPage;
