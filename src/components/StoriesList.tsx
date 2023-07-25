import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { RootState } from '@redux/store';
import { setStories } from '@actions/actionCreator';
import { ArrayStoryType, StoryType } from '@const/storyConst';
import { StyledButton } from '@ui/Buttons';
import { Title } from '@ui/Text';
import { getStories } from '@api/hnApi';
import StoryCard from '@components/StoryCard';

const StoriesList = () => {
	const dispatch = useDispatch();
	const { isLoading, isError, isSuccess, data, refetch, isFetching } = useQuery(
		'stories',
		() => getStories(),
		{
			refetchInterval: 60000,
		}
	);

	const news = useSelector(
		(state: RootState): ArrayStoryType => state.news.stories
	);

	useEffect(() => {
		if (isSuccess) {
			dispatch(setStories(data));
		}
	}, [isSuccess]);

	return (
		<>
			<StyledButton onClick={() => refetch()}>
				{isFetching ? <p>Обновляется...</p> : <p>Обновить</p>}
			</StyledButton>

			{isError && <Title>ОШИБКА</Title>}
			{isLoading && <Title>Посты загружаются...</Title>}
			{news?.map((story: StoryType) => {
				return story ? <StoryCard key={story.id} data={story} /> : null;
			})}
		</>
	);
};

export default StoriesList;
