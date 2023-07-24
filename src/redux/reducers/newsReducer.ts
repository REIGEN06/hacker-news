import { ActionTypes, SET_ALL_STORIES } from "../../utils/const/actionConst";
import { ArrayStoryType } from "../../utils/const/storyConst";

type stateType = {
	stories: ArrayStoryType;
};

const defaultState: stateType = {
	stories: [],
};

export const newsReducer = (
	state = defaultState,
	action: ActionTypes
): stateType => {
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
