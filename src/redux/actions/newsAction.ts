import { Dispatch } from "redux";
import { SET_ALL_STORIES} from "../../utils/const";

//ЭКШЕН(или данные для экшена, хз). Запрашиваем данные всех постов по айди
export const setStories = (data: any): any => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: SET_ALL_STORIES,
      payload: data,
    });
  };
};
