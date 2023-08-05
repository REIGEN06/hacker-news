import styled from 'styled-components';
import { StoryTypeProps } from '@const/storyConst';
import { StyledLink } from '@ui/Links';
import { StoryInfo } from './StoryInfo';
import { CommentCount } from './CommentCount';

const StoryCard = (storyData: StoryTypeProps) => {
	const story = storyData.data;
	return (
		<NewsCardWrapperLink className="nav-link" to={`/item/${story.id}`}>
			<StoryInfo data={story} />
			<CommentCount data={story} />
		</NewsCardWrapperLink>
	);
};

export default StoryCard;

const NewsCardWrapperLink = styled(StyledLink)`
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	border-width: 1px 0px;
	padding: 5px 10px;
	width: 100%;
`;
