import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
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
		<StoryContentWrapper>
			{Story.isLoading && <Title>Пост загружается...</Title>}
			{Story.data && <StoryContent data={Story.data} />}
		</StoryContentWrapper>
	);
};

export default StoryPage;

const StoryContentWrapper = styled(DefaultPageWrapper)`
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	border-radius: 10px;
`;
