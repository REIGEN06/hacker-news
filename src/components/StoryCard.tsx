import styled from 'styled-components';
import { UnixToLocaleTime } from '@functions/functions';
import { StoryTypeObject } from '@const/storyConst';
import { Title, Text } from '@ui/Text';
import { ColoredLink } from '@ui/Links';
import { Row } from '@ui/Sections';

const StoryCard = (storyData: StoryTypeObject) => {
	const story = storyData.data;
	return (
		<NewsCardWrapperLink className="nav-link" to={`/item/${story.id}`}>
			<Title>{story.title}</Title>

			<Row>
				<Text $isBold>{story.by}</Text>
				<Text>{UnixToLocaleTime(story.time)}</Text>
				<Text $isBold>⭐{story.score}</Text>
			</Row>

			<Text>Комментариев: {story.descendants}</Text>
		</NewsCardWrapperLink>
	);
};

export default StoryCard;

const NewsCardWrapperLink = styled(ColoredLink)`
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	border-width: 1px 0px;
	padding: 5px 10px;
	width: 100%;
`;
