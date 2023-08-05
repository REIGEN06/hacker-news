import styled from 'styled-components';
import { StoryTypeProps } from '@const/storyConst';
import { StyledLink } from '@ui/Links';
import { StoryInfo } from './StoryInfo';
import { CommentCount } from './CommentCount';

const StoryCard = (storyData: StoryTypeProps) => {
	const story = storyData.data;
	return (
		<StoryCardWrapperLink className="nav-link" to={`/item/${story.id}`}>
			<StoryInfo data={story} />
			<CommentCount data={story} />
		</StoryCardWrapperLink>
	);
};

export default StoryCard;

const StoryCardWrapperLink = styled(StyledLink)`
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	border-radius: 10px;
	padding: 5px 10px;
	margin: 5px 0px;
	width: 100%;
`;
