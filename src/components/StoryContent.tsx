import { useQuery } from 'react-query';
import { UnixToLocaleTime, decodeHtml } from '@functions/functions';
import { StoryType, StoryTypeObject } from '@const/storyConst';
import { ColoredLinkBlueWithoutBG } from '@ui/Links';
import { Title, Text } from '@ui/Text';
import { StyledButton } from '@ui/Buttons';
import { Row } from '@ui/Sections';
import CommentCard from '@components/CommentCard';
import { getStoriesByIds } from '@api/hnApi';

const StoryContent = (storyData: StoryTypeObject) => {
	const story = storyData.data;
	const commentsIds = story.kids;

	const { data, refetch, isFetching } = useQuery('comment', () =>
		getStoriesByIds(commentsIds)
	);

	return (
		<>
			<Title>{story.title}</Title>

			<ColoredLinkBlueWithoutBG to={`${story.url}`}>
				<Text>Перейти к источнику</Text>
			</ColoredLinkBlueWithoutBG>

			<Row>
				<Text isBold>{story.by}</Text>
				<Text>{UnixToLocaleTime(story.time)}</Text>
				<Text isBold>⭐{story.score}</Text>
			</Row>

			{story.text && <Text>{decodeHtml(story.text)}</Text>}

			<Text>Комментариев: {story.descendants}</Text>

			<StyledButton onClick={() => refetch()}>
				{isFetching ? (
					<p>Коментарии обновляются...</p>
				) : (
					<p>Обновить комментарии</p>
				)}
			</StyledButton>

			{data?.map((comment: StoryType) => (
				<CommentCard key={comment.id} data={comment} />
			))}
		</>
	);
};

export default StoryContent;
