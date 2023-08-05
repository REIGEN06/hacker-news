import { StoryType } from '@const/storyConst';
import { UnixToLocaleTime, decodeHtml } from '@functions/functions';
import { StyledLinkBlueWithoutBG } from '@ui/Links';
import { Row } from '@ui/Sections';
import { Title, Text } from '@ui/Text';

type StoryInfoType = {
	data: StoryType;
	source?: boolean;
	text?: boolean;
};
export const StoryInfo = (props: StoryInfoType) => {
	const story = props.data;
	return (
		<>
			<Title>{story.title}</Title>
			{story.type !== 'comment' && props.source && (
				<StyledLinkBlueWithoutBG to={`${story.url}`}>
					<Text>Перейти к источнику</Text>
				</StyledLinkBlueWithoutBG>
			)}
			<Row>
				<Text isBold>{story.by}</Text>
				<Text>{UnixToLocaleTime(story.time)}</Text>
				<Text isBold>⭐{story.score}</Text>
			</Row>
			{props.text && story.text && <Text>{decodeHtml(story.text)}</Text>}
		</>
	);
};
