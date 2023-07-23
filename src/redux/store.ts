import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { newsReducer } from "./reducers/newsReducer";

const rootReducer = combineReducers({
  news: newsReducer,
});
export type rootReducerType=ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
