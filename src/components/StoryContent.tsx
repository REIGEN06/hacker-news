import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { StoryType, StoryTypeProps } from '@const/storyConst';
import { StyledButton } from '@ui/Buttons';
import { DefaultPageWrapper } from '@ui/PageWrappers';
import { ReactComponent as BackIcon } from '@ui/icons/backIcon.svg';
import CommentCard from '@components/CommentCard';
import { getStoriesByIds } from '@api/hnApi';
import { StoryInfo } from './StoryInfo';
import { CommentCount } from './CommentCount';

const StoryContent = (story: StoryTypeProps) => {
	const commentsIds = story.data.kids;

	const navigate = useNavigate();

	const comments = useQuery(
		'comments',
		() => getStoriesByIds(commentsIds || []),
		{
			refetchInterval: 60000,
		}
	);

	const prevPage = window.location.href;
	const goBack = () => {
		navigate(-1);
		setTimeout(function () {
			if (window.location.href === prevPage) {
				navigate('/');
			}
		}, 500);
	};

	return (
		<>
			<BackButton onClick={() => goBack()}>
				<BackIcon />
			</BackButton>

			<StoryContentWrapper>
				<StoryInfo source text data={story.data} />
			</StoryContentWrapper>

			<CommentsCountWrapper>
				<CommentCount data={story.data} />
				<StyledButton onClick={comments.refetch}>
					{comments.isFetching ? (
						<p>Коментарии обновляются...</p>
					) : (
						<p>Обновить комментарии</p>
					)}
				</StyledButton>
			</CommentsCountWrapper>

			{comments.data?.map((comment: StoryType) => (
				<CommentCard key={comment.id} data={comment} />
			))}
		</>
	);
};

export default StoryContent;

const StoryContentWrapper = styled(DefaultPageWrapper)`
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	border-radius: 10px;
`;
const CommentsCountWrapper = styled(DefaultPageWrapper)`
	margin: 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const BackButton = styled(StyledButton)`
	padding: 5px 50px;
	margin: 15px 20px 0px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
