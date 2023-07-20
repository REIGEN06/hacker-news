import { useEffect } from "react";
import { setStories, getStories } from "../redux/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { StoryType } from "../utils/const";
import { NewsCard } from "./NewsCard";

/* eslint-disable react/react-in-jsx-scope */
export const NewsList = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data, refetch, isFetching } = useQuery(
    "stories",
    () => getStories(),
    {
      refetchOnWindowFocus: false,
    }
  );
  const news = useSelector((state: any) => state.news.data);
  console.log("RENDER");

  useEffect(() => {
    dispatch(setStories(data));
  }, [data]);

  return (
    <>
      <button onClick={() => refetch()}>
        {isFetching ? <p>Обновляется...</p> : <p>Обновить</p>}
      </button>
      {isError ? (
        <h1>ERROR</h1>
      ) : isLoading ? (
        <h1>Loading...</h1>
      ) : (
        news &&
        news.map((story: StoryType) => <NewsCard key={story.id} data={story} />)
      )}
    </>
  );
};
