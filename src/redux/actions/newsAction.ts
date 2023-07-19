import axios from "axios";
import { Dispatch } from "redux";
import { SET_ALL_STORIES_BY_IDS, StoryType } from "../../utils/const";

//ЭКШЕН(или данные для экшена, хз). Запрашиваем данные всех постов по айди
export const getAllStoriesByIds = (): any => {
  return async (dispatch: Dispatch) => {
    const ids = await getNewStoriesIds();

    Promise.all(ids.map((id: number) => getStoryById(id))).then((response) =>
      dispatch(setAllStoriesByIds(response))
    );
  };
};

//запрашиваем содержимое одного поста по айди
const getStoryById = (id: number): Promise<StoryType> => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    .then((response) => response.data);
};

//запрашиваем айди 100 новых постов
export const getNewStoriesIds = (): Promise<Array<number>> => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
    .then((response) => response.data.slice(0, 10));
};

//экшен криейтор, устанавливает данные 100 новых постов
export const setAllStoriesByIds = (news: Array<StoryType>) => ({
  type: SET_ALL_STORIES_BY_IDS,
  payload: news,
});
