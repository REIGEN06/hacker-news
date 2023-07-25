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
	const { isLoading, isError, data, refetch, isFetching } = useQuery(
		'stories',
		() => getStories()
	);

	const news = useSelector(
		(state: RootState): ArrayStoryType => state.news.stories
	);

	useEffect(() => {
		dispatch(setStories(data));
	}, [data]);

	useEffect(() => {
		const timerId = setInterval(() => {
			refetch();
		}, 60000);
		return () => {
			clearInterval(timerId);
		};
	}, []);

	return (
		<>
			<StyledButton onClick={() => refetch()}>
				{isFetching ? <p>Обновляется...</p> : <p>Обновить</p>}
			</StyledButton>

			{isError && <Title>ОШИБКА</Title>}
			{isLoading && <Title>Посты загружаются...</Title>}
			{news?.map((story: StoryType) => (
				<StoryCard key={story.id} data={story} />
			))}
		</>
	);
};

export default StoriesList;
