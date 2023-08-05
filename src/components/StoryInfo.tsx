import { StoryType } from '@const/storyConst';
import { UnixToLocaleTime } from '@functions/functions';
import { StyledLinkBlueWithoutBG } from '@ui/Links';
import { Row } from '@ui/Sections';
import { Title, Text } from '@ui/Text';
import { StyledLink } from '@ui/Links';
import styled from 'styled-components';

type StoryInfoType = {
	data: StoryType;
	source?: boolean;
	text?: boolean;
	comment?: boolean;
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
				{props.comment ? (
					<ResponseLink to={`/item/${story.id}`}>
						ответов: {story.kids ? story.kids?.length : 0}
					</ResponseLink>
				) : (
					<Text isBold>⭐{story.score}</Text>
				)}
			</Row>
			{props.text && story.text && (
				<Text dangerouslySetInnerHTML={{ __html: `${story.text}` }} />
			)}
		</>
	);
};

const ResponseLink = styled(StyledLink)`
	&:hover {
		background-color: transparent;
	}
`;
