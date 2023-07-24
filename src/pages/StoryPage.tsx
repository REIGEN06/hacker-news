import StoryContent from '../components/StoryContent';
import { Title } from '../ui/Text';
import { useLocation } from 'react-router-dom';
import { getStoryById } from '../api/hnApi';
import { useQuery } from 'react-query';
import { DefaultPageWrapper } from '../ui/PageWrappers';

const StoryPage = () => {
	const location = useLocation();
	const path = location.pathname.split('/');
	const id = +path[path.length - 1];
	const { isLoading, isError, data } = useQuery(
		'story',
		() => getStoryById(id),
		{
			refetchOnWindowFocus: false,
		}
	);

	return (
		<DefaultPageWrapper>
			{isError ? (
				<Title>ОШИБКА</Title>
			) : isLoading ? (
				<Title>Пост загружается...</Title>
			) : (
				data && <StoryContent key={data.id} data={data} />
			)}
		</DefaultPageWrapper>
	);
};

export default StoryPage;
