import { SET_ALL_STORIES, ActionTypes } from '@const/actionConst';
import { StoryType } from '@const/storyConst';

export const setStories = (data?: StoryType[]): ActionTypes => {
	return {
		type: SET_ALL_STORIES,
		payload: data,
	};
};
