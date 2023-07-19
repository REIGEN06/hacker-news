import {
  ActionTypes,
  SET_ALL_STORIES_BY_IDS,
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

    default:
      return state;
  }
};
