import { ActionTypes, SET_ALL_STORIES, StoryType } from "../../utils/const";

type stateTypes = {
  data: Array<StoryType>;
};

const defaultState: stateTypes = {
  data: [],
};

export const newsReducer = (state = defaultState, action: ActionTypes) => {
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
