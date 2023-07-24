import styled from 'styled-components';
import { StoryTypeObject } from '../utils/const/storyConst';
import { Title, Text, BoldText } from '../ui/Text';
import { Row } from '../ui/Sections';
import { ColoredLink } from '../ui/Links';
import { UnixToLocaleTime } from '../functions/functions';

const StoryCard = (storyData: StoryTypeObject) => {
	const story = storyData.data;
	const path = `/item/${story.id}`;
	return (
		<NewsCardWrapperLink className="nav-link" to={path}>
			<Title>{story.title}</Title>

			<Row>
				<BoldText>{story.by}</BoldText>
				<Text>{UnixToLocaleTime(story.time)}</Text>
				<BoldText>⭐{story.score}</BoldText>
			</Row>

			<Text>Комментариев: {story.descendants}</Text>
		</NewsCardWrapperLink>
	);
};

export default StoryCard;

const NewsCardWrapperLink = styled(ColoredLink)`
	border: solid #dce1e6;
	border-width: 1px 0px;
	padding: 5px 10px;
	width: 100%;
`;
