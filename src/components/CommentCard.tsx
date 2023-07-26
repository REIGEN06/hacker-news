import { useQuery } from 'react-query';
import { useState } from 'react';
import styled from 'styled-components';
import { UnixToLocaleTime, decodeHtml } from '@functions/functions';
import { StoryType, StoryTypeObject } from '@const/storyConst';
import { getStoriesByIds } from '@api/hnApi';
import { Text } from '@ui/Text';
import { StyledButton } from '@ui/Buttons';
import { Row } from '@ui/Sections';

const CommentCard = (story: StoryTypeObject) => {
	const comment = story.data;
	const [wantKids, setWantKids] = useState(false);
	const { data } = useQuery(
		comment.id.toString(),
		() => getStoriesByIds(comment.kids),
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
			</Row>

			<Text>{decodeHtml(comment.text)}</Text>

			{comment.kids?.length && (
				<StyledButton onClick={() => setWantKids(true)}>
					Ответов: {comment.kids?.length}
				</StyledButton>
			)}

			{data?.map((kidsComment: StoryType) => (
				<CommentCard key={kidsComment.id} data={kidsComment} />
			))}
		</CommentWrapper>
	);
};

export default CommentCard;

const CommentWrapper = styled.section`
	margin: 20px;
	display: flex;
	width: 90%; //хз, по левому краю не получается комменты поставить
	flex-direction: column;
	border-radius: 10px;
	padding: 5px 10px;
	background: #ffffff;
`;
