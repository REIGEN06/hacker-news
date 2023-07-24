import styled from 'styled-components';
import { Row } from '../ui/Sections';
import { Text, BoldText } from '../ui/Text';
import { UnixToLocaleTime, decodeHtml } from '../functions/functions';
import { StoryType, StoryTypeObject } from '../utils/const/storyConst';
import { StyledButton } from '../ui/Buttons';
import { getStoriesByIds } from '../api/hnApi';
import { useQuery } from 'react-query';
import { useState } from 'react';

const CommentCard = (story: StoryTypeObject) => {
	const comment = story.data;
	const [wantKids, setWantKids] = useState(false);
	const { data } = useQuery(
		comment.id.toString(),
		() => getStoriesByIds(comment.kids),
		{
			refetchOnWindowFocus: false,
			enabled: wantKids,
		}
	);

	if (!comment.deleted) {
		return (
			<CommentWrapper>
				<Row>
					<BoldText>{comment.by}</BoldText>
					<Text>{UnixToLocaleTime(comment.time)}</Text>
				</Row>

				<BoldText>
					{decodeHtml(comment.text).replace(/<\/?[^>]+>/g, '')}
				</BoldText>

				{comment.kids?.length && (
					<StyledButton onClick={() => setWantKids(true)}>
						Ответов: {comment.kids?.length}
					</StyledButton>
				)}

				{data &&
					data.map((kidsComment: StoryType) => (
						<CommentCard key={kidsComment.id} data={kidsComment} />
					))}
			</CommentWrapper>
		);
	} else {
		return null;
	}
};

export default CommentCard;

const CommentWrapper = styled.section`
	border: none;
	margin: 20px;
	display: flex;
	width: 90%; //хз, по левому краю не получается комменты поставить
	flex-direction: column;
	border-radius: 10px;
	padding: 5px 10px;
	background: #ffffff;
`;
