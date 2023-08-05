import { Action } from '@reduxjs/toolkit';
import { StoryType } from '@const/storyConst';

export const SET_ALL_STORIES = 'SET_ALL_STORIES';

export interface SetStoriesAction extends Action {
	type: typeof SET_ALL_STORIES;
	payload?: StoryType[];
}

export type ActionTypes = SetStoriesAction;
