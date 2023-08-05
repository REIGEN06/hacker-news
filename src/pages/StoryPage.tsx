import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import StoryContent from '@components/StoryContent';
import { DefaultPageWrapper } from '@ui/PageWrappers';
import { Title } from '@ui/Text';
import { getStoryById } from '@api/hnApi';

const StoryPage = () => {
	const urlParams = useParams();
	const StoryId = urlParams.id || '0';
	const Story = useQuery(StoryId, () => getStoryById(+StoryId));

	return (
		<DefaultPageWrapper>
			{!+StoryId ? (
				<Navigate to="/ERROR" />
			) : (
				Story.isLoading && <Title>Пост загружается...</Title>
			)}
			{Story.data && <StoryContent data={Story.data} />}
		</DefaultPageWrapper>
	);
};

export default StoryPage;
