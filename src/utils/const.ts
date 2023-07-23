import { setStories } from "../redux/actions/newsAction";

export const SET_ALL_STORIES = "SET_ALL_STORIES";
export type ActionTypes = ReturnType<typeof setStories>;

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
  text: string;
  deleted?:boolean;
};
export type StoryTypeObject = {
  data: StoryType;
};
