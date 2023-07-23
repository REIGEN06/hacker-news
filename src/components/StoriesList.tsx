import { useEffect } from "react";
import { setStories } from "../redux/actions/newsAction";
import { getStories } from "../utils/HN_API";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { StoryType } from "../utils/const";
import { StoryCard } from "./StoryCard";
import { Title } from "../styledComponents/Text";
import { StyledButton } from "../styledComponents/Buttons";

/* eslint-disable react/react-in-jsx-scope */
export const StoriesList = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, data, refetch, isFetching } = useQuery(
    "stories",
    () => getStories(),
    {
      refetchOnWindowFocus: false,
    }
  );
  const news = useSelector((state: any) => state.news.data);

  useEffect(() => {
    dispatch(setStories(data));
  }, [data]);

  useEffect(()=>{
    const timerId = setInterval(() => {
      refetch();
    }, 60000);
    return()=>{
      clearInterval(timerId);
    }
  },[])

  return (
    <>
      <StyledButton onClick={() => refetch()}>
        {isFetching ? <p>Обновляется...</p> : <p>Обновить</p>}
      </StyledButton>
      
      {isError ? (
        <Title>ОШИБКА</Title>
      ) : isLoading ? (
        <Title>Посты загружаются...</Title>
      ) : (
        news &&
        news.map((story: StoryType) => <StoryCard key={story.id} data={story} />)
      )}
    </>
  );
};

