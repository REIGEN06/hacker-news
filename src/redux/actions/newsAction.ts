import axios from "axios";
import { Dispatch } from "redux";
import { SET_ALL_STORIES_BY_IDS } from "../../utils/const";

//ЭКШЕН. запрашиваем данные всех постов по айди
export const getAllStoriesByIds = (): any => {
  return async (dispatch: Dispatch) => {
    const ids = await getNewStoriesIds();
    console.log(ids);

    Promise.all(ids.map((id: any) => getStoryById(id))).then((response) =>
      dispatch(setAllStoriesByIds(response))
    );
  };
};

//запрашиваем содержимое одного поста по айди
const getStoryById = (id: number): Promise<void> => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((response) => response.data);
};

//запрашиваем айди 100 новых постов
export const getNewStoriesIds = (): any => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
    .then((response) => response.data.slice(0, 10));
};

//экшен криейтор, устанавливает данные 100 новых постов
export const setAllStoriesByIds = (news: void[]) => ({
  type: SET_ALL_STORIES_BY_IDS,
  payload: news,
});
