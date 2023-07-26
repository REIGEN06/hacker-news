import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import StoryContent from '@components/StoryContent';
import { DefaultPageWrapper } from '@ui/PageWrappers';
import { Title } from '@ui/Text';
import { getStoryById } from '@api/hnApi';

const StoryPage = () => {
	const urlParams = useParams();
	const StoryId = urlParams.id || 0;
	const { isLoading, data } = useQuery(StoryId.toString(), () =>
		getStoryById(+StoryId)
	);

	return (
		<DefaultPageWrapper>
			{!+StoryId ? (
				<Navigate to="/ERROR" />
			) : (
				isLoading && <Title>Пост загружается...</Title>
			)}
			{data && <StoryContent key={data.id} data={data} />}
		</DefaultPageWrapper>
	);
};

export default StoryPage;
