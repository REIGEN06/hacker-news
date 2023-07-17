import { AnyAction } from "redux";

const SET_NEWS = "SET_NEWS";
const SET_NEWS_IDS = "SET_NEWS_IDS";
const defaultState = {
  items: [],
  ids: [],
};

export const newsReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case SET_NEWS:
      return {
        ...state,
        items: action.payload.data,
      };

    case SET_NEWS_IDS:
      return {
        ...state,
        ids: action.payload,
      };

    default:
      return state;
  }
};
