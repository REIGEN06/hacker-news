import { StoryTypeProps } from '@const/storyConst';
import { Text } from '@ui/Text';

export const CommentCount = (props: StoryTypeProps) => {
	const story = props.data;
	return (
		<Text>
			Комментариев:{' '}
			{story.descendants ? story.descendants : story.kids?.length || 0}
		</Text>
	);
};
