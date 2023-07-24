import { SET_ALL_STORIES, ActionTypes } from "../../utils/const/actionConst";
import { StoryType } from "../../utils/const/storyConst";

export const setStories = (data?: StoryType[]): ActionTypes => {
	return {
		type: SET_ALL_STORIES,
		payload: data,
	};
};
