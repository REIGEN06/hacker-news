import styled from 'styled-components';
import { useQuery } from 'react-query';
import { UnixToLocaleTime, decodeHtml } from '@functions/functions';
import { StoryType, StoryTypeObject } from '@const/storyConst';
import { ColoredLinkBlueWithoutBG } from '@ui/Links';
import { Title, Text } from '@ui/Text';
import { StyledButton } from '@ui/Buttons';
import { Row } from '@ui/Sections';
import CommentCard from '@components/CommentCard';
import { getStoriesByIds } from '@api/hnApi';
import { DefaultPageWrapper } from '@ui/PageWrappers';

const StoryContent = (storyData: StoryTypeObject) => {
	const story = storyData.data;
	const commentsIds = story.kids;

	const { data, refetch, isFetching } = useQuery('comment', () =>
		getStoriesByIds(commentsIds)
	);

	return (
		<>
			<StoryContentWrapper>
				<Title>{story.title}</Title>

				<ColoredLinkBlueWithoutBG to={`${story.url}`}>
					<Text>Перейти к источнику</Text>
				</ColoredLinkBlueWithoutBG>

				<Row>
					<Text $isBold>{story.by}</Text>
					<Text>{UnixToLocaleTime(story.time)}</Text>
					<Text $isBold>⭐{story.score}</Text>
				</Row>

				{story.text && <Text>{decodeHtml(story.text)}</Text>}
			</StoryContentWrapper>
			<CommentsCountWrapper>
				<Text>Комментариев: {story.descendants}</Text>

				<StyledButton onClick={() => refetch()}>
					{isFetching ? (
						<p>Коментарии обновляются...</p>
					) : (
						<p>Обновить комментарии</p>
					)}
				</StyledButton>
			</CommentsCountWrapper>
			{data?.map((comment: StoryType) => (
				<CommentCard key={comment.id} data={comment} />
			))}
		</>
	);
};

export default StoryContent;

export const StoryContentWrapper = styled(DefaultPageWrapper)`
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	border-radius: 10px;
`;
export const CommentsCountWrapper = styled(DefaultPageWrapper)`
	margin: 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
