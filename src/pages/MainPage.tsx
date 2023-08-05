import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import { RootState } from '@redux/store';
import { setStories } from '@actions/actionCreator';
import { ArrayStoryType, StoryType } from '@const/storyConst';
import { StyledButton } from '@ui/Buttons';
import { Title } from '@ui/Text';
import { Row } from '@ui/Sections';
import { getStories } from '@api/hnApi';
import StoryCard from '@components/StoryCard';
import { DefaultPageWrapper } from '@ui/PageWrappers';

const MainPage = () => {
	const dispatch = useDispatch();
	const [input, setInput] = useState('');

	const stories = useQuery('stories', () => getStories(), {
		refetchInterval: 60000,
	});

	const news = useSelector(
		(state: RootState): ArrayStoryType => state.news.stories
	);

	const filteredNews = news?.filter((story) => {
		return story && story.title?.toLowerCase().includes(input.toLowerCase());
	});

	useEffect(() => {
		if (stories.isSuccess) {
			dispatch(setStories(stories.data));
		}
	}, [stories.isSuccess]);

	const debounce = (fn: any, ms = 300) => {
		let timeoutId: ReturnType<typeof setTimeout>;
		return function (this: any, ...args: any[]) {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => fn.apply(this, args), ms);
		};
	};

	return (
		<MainPageWrapper>
			<Title>Страница новостей</Title>
			<Row>
				<StyledInput
					placeholder="Введите название поста"
					onChange={debounce(
						(event: React.ChangeEvent<HTMLInputElement>) =>
							setInput(event.target.value),
						300
					)}
				/>
				<StyledButton padding="0px 5px" onClick={stories.refetch}>
					{stories.isFetching ? (
						<p>Список обновляется...</p>
					) : (
						<p>Обновить список</p>
					)}
				</StyledButton>
			</Row>
			{stories.isError && <Title>ОШИБКА</Title>}
			{stories.isLoading && <Title>Посты загружаются...</Title>}
			{filteredNews?.map((story: StoryType) => {
				return story ? <StoryCard key={story.id} data={story} /> : null;
			})}
		</MainPageWrapper>
	);
};

export default MainPage;

const MainPageWrapper = styled(DefaultPageWrapper)`
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	border-radius: 10px;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledInput = styled.input`
	background: ${(props) => props.theme.BGcolors.gray};
	border-radius: 50px;
	padding: 10px;
	display: flex;
	align-items: center;
	gap: 5px;
`;
