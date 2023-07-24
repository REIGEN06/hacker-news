import { ActionTypes, SET_ALL_STORIES } from "../../utils/const/actionConst";
import { ArrayStoryType } from "../../utils/const/storyConst";

type stateType = {
	data: ArrayStoryType;
};

const defaultState: stateType = {
	data: [],
};

export const newsReducer = (
	state = defaultState,
	action: ActionTypes
): stateType => {
	switch (action.type) {
		case SET_ALL_STORIES:
			return {
				...state,
				data: action.payload,
			};

		default:
			return state;
	}
};
