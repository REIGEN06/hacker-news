import { useEffect } from "react";
import { getAllStoriesByIds } from "../redux/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import { StoryType } from "../utils/const";

/* eslint-disable react/react-in-jsx-scope */
export const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector((state: any) => state.news.data);

  useEffect(() => {
    dispatch(getAllStoriesByIds());
  }, []);

  return (
    <>
      {news.map((story: StoryType) => (
        <p key={story.id}>{story.by}</p>
      ))}
    </>
  );
};
