import axios from "axios";
import { Dispatch } from "redux";
import { SET_ALL_STORIES, StoryType } from "../../utils/const";

//ЭКШЕН(или данные для экшена, хз). Запрашиваем данные всех постов по айди
export const setStories = (data: any): any => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SET_ALL_STORIES,
      payload: data,
    });
  };
};

//запрашиваем ДАННЫЕ ВСЕХ постов
export const getStories = (): Promise<StoryType | StoryType[]> => {
  return getNewStoriesIds().then((ids) =>
    Promise.all(ids.map((id: number) => getStoryById(id)))
  );
};

//запрашиваем ДАННЫЕ одного поста по одному айди
const getStoryById = (id: number): Promise<StoryType> => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((response) => response.data);
};

//запрашиваем АЙДИ 100 новых постов
export const getNewStoriesIds = (): Promise<Array<number>> => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
    .then((response) => response.data.slice(0, 10));
};
