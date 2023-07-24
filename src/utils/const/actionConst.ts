import { Action } from '@reduxjs/toolkit';
import { StoryType } from './storyConst';

export const SET_ALL_STORIES = 'SET_ALL_STORIES';

export interface SetStoriesAction extends Action {
	type: 'SET_ALL_STORIES'; //не могу присвоить SET_ALL_STORIES как значение для type
	payload?: StoryType[];
}

export type ActionTypes = SetStoriesAction;
