import { useQuery } from 'react-query';
import { useState } from 'react';
import styled from 'styled-components';
import { UnixToLocaleTime, decodeHtml } from '@functions/functions';
import { StoryType, StoryTypeProps } from '@const/storyConst';
import { getStoriesByIds } from '@api/hnApi';
import { Text } from '@ui/Text';
import { StyledButton } from '@ui/Buttons';
import { Row } from '@ui/Sections';
import { StyledLink } from '@ui/Links';

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
			<Row>
				<Text isBold>{comment.by}</Text>
				<Text>{UnixToLocaleTime(comment.time)}</Text>
				<ResponseLink to={`/item/${comment.id}`}>
					ответов: {comment.kids ? comment.kids?.length : 0}
				</ResponseLink>
			</Row>

			<Text>{decodeHtml(comment.text)}</Text>

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

const ResponseLink = styled(StyledLink)`
	&:hover {
		background-color: transparent;
	}
`;
