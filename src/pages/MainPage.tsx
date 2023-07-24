import StoriesList from '../components/StoriesList';
import { DefaultPageWrapper } from '../styledComponents/PageWrappers';
import { Title } from '../styledComponents/Text';

const MainPage = () => {
	return (
		<DefaultPageWrapper>
			<Title>Страница свежих новостей</Title>
			<StoriesList />
		</DefaultPageWrapper>
	);
};

export default MainPage;
