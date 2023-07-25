import { ActionTypes, SET_ALL_STORIES } from '@const/actionConst';
import { ArrayStoryType } from '@const/storyConst';

type stateType = {
	stories: ArrayStoryType;
};

const defaultState: stateType = {
	stories: [],
};

const newsReducer = (state = defaultState, action: ActionTypes): stateType => {
	switch (action.type) {
		case SET_ALL_STORIES:
			return {
				...state,
				stories: action.payload,
			};

		default:
			return state;
	}
};

export default newsReducer;
