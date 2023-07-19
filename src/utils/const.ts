import { setAllStoriesByIds } from "../redux/actions/newsAction";

export const SET_ALL_STORIES_BY_IDS = "SET_NEWS_IDS";
export type ActionTypes = ReturnType<typeof setAllStoriesByIds>;

export type StoryType = {
  by?: string;
  descendants?: number;
  id: number;
  score?: number;
  time?: number;
  title?: string;
  type?: string;
  url?: string;
  kids?: number[];
};
