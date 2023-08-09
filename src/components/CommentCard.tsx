import { useQuery } from 'react-query';
import { useState } from 'react';
import styled from 'styled-components';
import { StoryType, StoryTypeProps } from '@const/storyConst';
import { getStoriesByIds } from '@api/hnApi';
import { Text } from '@ui/Text';
import { StyledButton } from '@ui/Buttons';
import { StoryInfo } from './StoryInfo';

const CommentCard = (story: StoryTypeProps) => {
	const comment = story.data;
	const [wantKids, setWantKids] = useState(false);
	const commentsKids = useQuery(
		comment.id.toString(),
		() => getStoriesByIds(comment.kids || []),
		{
			enabled: wantKids,
		}
	);

	if (comment.deleted || comment.dead) return null;
	return (
		<CommentWrapper>
			<StoryInfo text comment data={comment} />

			{comment.kids?.length && (
				<ResponseButton
					active={wantKids}
					onClick={() => setWantKids(!wantKids)}
				>
					{!wantKids ? (
						<Text>Показать комментарии: {comment.kids?.length}</Text>
					) : (
						<Text>Скрыть комментарии</Text>
					)}
				</ResponseButton>
			)}

			{wantKids &&
				commentsKids.data?.map((kidsComment: StoryType) => (
					<CommentCard key={kidsComment.id} data={kidsComment} />
				))}
		</CommentWrapper>
	);
};

export default CommentCard;

const ResponseButton = styled(StyledButton)`
	background: ${({ active }) =>
		active ? (props) => props.theme.BGcolors.active : ''};
`;

const CommentWrapper = styled.section`
	margin: 5px 20px;
	display: flex;
	flex-direction: column;
	border-radius: 10px;
	padding: 5px 10px;
	background: ${(props) => props.theme.BGcolors.white};
`;
