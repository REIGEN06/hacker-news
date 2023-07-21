import { useEffect } from "react";
import { setStories, getStories } from "../redux/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "react-query";
import { StoryType } from "../utils/const";
import { NewsCard } from "./NewsCard";
import styled from "styled-components";
import { Title } from "../styledComponents/Text";

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

  useEffect(() => {
    dispatch(setStories(data));
  }, [data]);

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
        news.map((story: StoryType) => <NewsCard key={story.id} data={story} />)
      )}
    </>
  );
};

const StyledButton = styled.button`
  border: 1px solid #dce1e6;
  background: #ffffff;
  border-radius:20px;
  cursor:pointer;
  margin:5px;
  &:hover {
    background-color: #f5f6f8;
  }
  &:active{
    background-color: #e6e7eb;
    color:#79818c;
}
`;
