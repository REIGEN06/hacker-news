import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { UnixToLocaleTime, decodeHtml } from '@functions/functions';
import { StoryType, StoryTypeObject } from '@const/storyConst';
import { StyledLinkBlueWithoutBG } from '@ui/Links';
import { Title, Text } from '@ui/Text';
import { StyledButton } from '@ui/Buttons';
import { Row } from '@ui/Sections';
import { DefaultPageWrapper } from '@ui/PageWrappers';
import { ReactComponent as BackIcon } from '@ui/icons/backIcon.svg';
import CommentCard from '@components/CommentCard';
import { getStoriesByIds } from '@api/hnApi';

const StoryContent = (storyData: StoryTypeObject) => {
	const story = storyData.data;
	const commentsIds = story.kids;

	const navigate = useNavigate();
	const { data, refetch, isFetching } = useQuery('comment', () =>
		getStoriesByIds(commentsIds)
	);

	return (
		<>
			<StyledButton
				$padding="5px 50px"
				$margin="15px 20px 0px"
				onClick={() => navigate(-1)}
			>
				<BackIcon />
			</StyledButton>

			<StoryContentWrapper>
				<Title>{story.title}</Title>

				{story.type !== 'comment' && (
					<StyledLinkBlueWithoutBG to={`${story.url}`}>
						<Text>Перейти к источнику</Text>
					</StyledLinkBlueWithoutBG>
				)}

				<Row>
					<Text $isBold>{story.by}</Text>
					<Text>{UnixToLocaleTime(story.time)}</Text>
					<Text $isBold>⭐{story.score}</Text>
				</Row>

				{story.text && <Text>{decodeHtml(story.text)}</Text>}
			</StoryContentWrapper>

			<CommentsCountWrapper>
				<Text>
					Комментариев:{' '}
					{story.descendants ? story.descendants : story.kids?.length || 0}
				</Text>

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
