/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { StoryType, StoryTypeObject } from '../utils/const/storyConst';
import { Row } from '../styledComponents/Sections';
import { Title, Text, BoldText } from '../styledComponents/Text';
import { ColoredA } from '../styledComponents/Links';
import { UnixToLocaleTime, decodeHtml } from '../utils/functions';
import CommentCard from './CommentCard';
import { useQuery } from 'react-query';
import { getStoriesByIds } from '../utils/hnApi';
import { StyledButton } from '../styledComponents/Buttons';

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

			<ColoredA href={story.url}>
				<Text>Перейти к источнику</Text>
			</ColoredA>

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

			{data &&
				data.map((comment: StoryType) => (
					<CommentCard key={comment.id} data={comment} />
				))}
		</>
	);
};

export default StoryContent;
