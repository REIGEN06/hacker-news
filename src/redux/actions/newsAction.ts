import axios from "axios";
import { Dispatch } from "redux";
const SET_NEWS = "SET_NEWS";
const SET_NEWS_IDS = "SET_NEWS_IDS";

//запрашиваем данные с сервера и сохраняем их в response
export const getNewsIds = (): any => {
  return async (dispatch: Dispatch) => {
    const response = await axios
      .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
      .then((value) => value.data.slice(0, 100));

    dispatch(setNewsIds(response));
  };
};
export const getNewsByIds = (ids: any): any => {
  return async (dispatch: Dispatch): Promise<void> => {
    const response = await axios.get(
      `https://hacker-news.firebaseio.com/v0/newstories.json`
    );

    dispatch(setNews(response.data));
  };
};

//экшен криейтор, возвращает экшен (объект с типом и репозиторием)
export const setNewsIds = (ids: Array<number>) => ({
  type: SET_NEWS_IDS,
  payload: ids,
});

export const setNews = (news: any) => ({
  type: SET_NEWS,
  payload: news,
});
