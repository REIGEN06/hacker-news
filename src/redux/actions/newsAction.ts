import axios from "axios";
import { Dispatch } from "redux";
import { SET_ALL_STORIES_BY_IDS, SET_NEW_STORIES_IDS } from "../../utils/const";

//запрашиваем айди 100 новых постов
export const getNewStoriesIds = (): any => {
  return (dispatch: Dispatch) => {
    axios
      .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
      .then((response) => response.data.slice(0, 10))
      .then((response) => dispatch(setNewStoriesIds(response)));
  };
};

//запрашиваем данные всех постов по айди
export const getAllStoriesByIds = (ids: Array<number>): any => {
  return (dispatch: Dispatch): any => {
    Promise.all(ids.map((id) => getStoryById(id))).then((response) =>
      dispatch(setAllStoriesByIds(response))
    );
  };
};

//запрашиваем данные одного поста по айди
const getStoryById = (id: number): Promise<void> => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((response) => response.data);
};

//экшен криейтор, устанавливает айди 100 новых постов
export const setNewStoriesIds = (ids: Array<number>) => ({
  type: SET_NEW_STORIES_IDS,
  payload: ids,
});

//экшен криейтор, устанавливает данные 100 новых постов
export const setAllStoriesByIds = (news: void[]) => ({
  type: SET_ALL_STORIES_BY_IDS,
  payload: news,
});
