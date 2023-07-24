import axios from 'axios';
import { StoryType } from '../utils/const/storyConst';
import { HN_BASE_PATH } from '../utils/const/routerConst';

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
		.get(`${HN_BASE_PATH}item/${id}.json`)
		.then((response) => response.data);
};

//запрашиваем АЙДИ 100 новых постов
const getNewStoriesIds = (): Promise<Array<number>> => {
	return axios
		.get(`${HN_BASE_PATH}newstories.json`)
		.then((response) => response.data.slice(0, 100));
};
