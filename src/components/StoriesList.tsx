import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { RootState } from '@redux/store';
import { setStories } from '@actions/actionCreator';
import { ArrayStoryType, StoryType } from '@const/storyConst';
import { StyledButton } from '@ui/Buttons';
import { Title } from '@ui/Text';
import { Row } from '@ui/Sections';
import { getStories } from '@api/hnApi';
import StoryCard from '@components/StoryCard';

const StoriesList = () => {
	const dispatch = useDispatch();
	const [input, setInput] = useState('');

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

	const filteredNews = news?.filter((story) => {
		return story.title?.toLowerCase().includes(input.toLowerCase());
	});

	useEffect(() => {
		if (isSuccess) {
			dispatch(setStories(data));
		}
	}, [isSuccess]);

	return (
		<>
			<Row>
				<StyledInput
					type="text"
					name="name"
					placeholder="Введите название поста"
					onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
						setInput(event.target.value)
					}
				/>
				<StyledButton $padding="0px 5px" onClick={() => refetch()}>
					{isFetching ? (
						<p>Список обновляется...</p>
					) : (
						<p>Обновить список новостей</p>
					)}
				</StyledButton>
			</Row>

			{isError && <Title>ОШИБКА</Title>}
			{isLoading && <Title>Посты загружаются...</Title>}
			{filteredNews?.map((story: StoryType) => {
				return story ? <StoryCard key={story.id} data={story} /> : null;
			})}
		</>
	);
};

export default StoriesList;

const StyledInput = styled.input`
	background: ${(props) => props.theme.BGcolors.gray};
	border-radius: 50px;
	padding: 10px;
	display: flex;
	align-items: center;
	gap: 5px;
`;
