import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import StoryContent from '@components/StoryContent';
import { DefaultPageWrapper } from '@ui/PageWrappers';
import { Title } from '@ui/Text';
import { getStoryById } from '@api/hnApi';

const StoryPage = () => {
	const urlParams = useParams();
	const navigate = useNavigate();
	const StoryId = urlParams.id || '0';
	const Story = useQuery(StoryId, () => getStoryById(+StoryId));
	isNaN(+StoryId) && navigate('/ERROR');
	return (
		<DefaultPageWrapper>
			{Story.isLoading && <Title>Пост загружается...</Title>}
			{Story.data && <StoryContent data={Story.data} />}
		</DefaultPageWrapper>
	);
};

export default StoryPage;
