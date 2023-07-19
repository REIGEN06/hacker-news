import {
  ActionTypes,
  SET_ALL_STORIES_BY_IDS,
  SET_NEW_STORIES_IDS,
  StoryType,
} from "../../utils/const";

type stateTypes = {
  data: Array<StoryType>;
  ids: Array<number>;
};

const defaultState: stateTypes = {
  data: [],
  ids: [],
};

export const newsReducer = (state = defaultState, action: ActionTypes) => {
  switch (action.type) {
    case SET_ALL_STORIES_BY_IDS:
      return {
        ...state,
        data: action.payload,
      };

    case SET_NEW_STORIES_IDS:
      return {
        ...state,
        ids: action.payload,
      };

    default:
      return state;
  }
};
