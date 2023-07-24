import { StoryType, StoryTypeObject } from '../utils/const/storyConst';
import { Row } from '../ui/Sections';
import { Title, Text, BoldText } from '../ui/Text';
import { ColoredLinkBlueWithoutBG } from '../ui/Links';
import { UnixToLocaleTime, decodeHtml } from '../functions/functions';
import CommentCard from './CommentCard';
import { useQuery } from 'react-query';
import { getStoriesByIds } from '../api/hnApi';
import { StyledButton } from '../ui/Buttons';

const StoryContent = (storyData: StoryTypeObject) => {
	const story = storyData.data;
	const commentsIds = story.kids;

	const { data, refetch, isFetching } = useQuery(
		'comment',
		() => getStoriesByIds(commentsIds),
		{
			refetchOnWindowFocus: false,
		}
	);

	return (
		<>
			<Title>{story.title}</Title>

			<ColoredLinkBlueWithoutBG to={`${story.url}`}>
				<Text>Перейти к источнику</Text>
			</ColoredLinkBlueWithoutBG>

			<Row>
				<BoldText>{story.by}</BoldText>
				<Text>{UnixToLocaleTime(story.time)}</Text>
				<BoldText>⭐{story.score}</BoldText>
			</Row>

			{story.text && (
				<BoldText>{decodeHtml(story.text).replace(/<\/?[^>]+>/g, '')}</BoldText>
			)}

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
