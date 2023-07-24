import axios from "axios";
import { StoryType } from "./const/storyConst";

//запрашиваем ДАННЫЕ всех постов по айди
export const getStoriesByIds = (
	ids: number[] | undefined
): Promise<StoryType[]> | undefined => {
	if (ids !== undefined)
		return Promise.all(ids.map((id: number) => getStoryById(id)));
};

//запрашиваем ДАННЫЕ всех НОВЫХ постов
export const getStories = (): Promise<StoryType[]> => {
	return getNewStoriesIds().then((ids) =>
		Promise.all(ids.map((id: number) => getStoryById(id)))
	);
};

//запрашиваем ДАННЫЕ одного поста по одному айди
export const getStoryById = (id: number): Promise<StoryType> => {
	return axios
		.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
		.then((response) => response.data);
};

//запрашиваем АЙДИ 100 новых постов
const getNewStoriesIds = (): Promise<Array<number>> => {
	return axios
		.get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
		.then((response) => response.data.slice(0, 100));
};
