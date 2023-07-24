/* eslint-disable react/react-in-jsx-scope */

import { StoryContent } from "../components/StoryContent";
import { Title } from "../styledComponents/Text";
import { useLocation } from "react-router-dom";
import { getStoryById } from "../utils/HN_API";
import { useQuery } from "react-query";
import { DefaultPageWrapper } from "../styledComponents/PageWrappers";

export const StoryPage = () => {
	const location = useLocation();
	const path = location.pathname.split("/");
	const id = +path[path.length - 1];
	const { isLoading, isError, data } = useQuery(
		"story",
		() => getStoryById(id),
		{
			refetchOnWindowFocus: false,
		}
	);

	return (
		<DefaultPageWrapper>
			{isError ? (
				<Title>ОШИБКА</Title>
			) : isLoading ? (
				<Title>Пост загружается...</Title>
			) : (
				data && <StoryContent key={data.id} data={data} />
			)}
		</DefaultPageWrapper>
	);
};
