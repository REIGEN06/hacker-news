import styled from 'styled-components';
import StoriesList from '@components/StoriesList';
import { DefaultPageWrapper } from '@ui/PageWrappers';
import { Title } from '@ui/Text';

const MainPage = () => {
	return (
		<MainPageWrapper>
			<Title>Страница свежих новостей</Title>
			<StoriesList />
		</MainPageWrapper>
	);
};

export default MainPage;

export const MainPageWrapper = styled(DefaultPageWrapper)`
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
