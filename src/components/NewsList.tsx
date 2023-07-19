import { useEffect } from "react";
import { getAllStoriesByIds } from "../redux/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import { StoryType } from "../utils/const";

type IdsArray = {
  data: Array<number>;
};
/* eslint-disable react/react-in-jsx-scope */
export const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: any) => state.news.data);
  // console.log("news", news);

  useEffect(() => {
    dispatch(getAllStoriesByIds()); //1
  }, []);

  return (
    <>
      {news.map((story: StoryType) => (
        <p key={story.id}>{story.by}</p>
      ))}
    </>
  );
};
