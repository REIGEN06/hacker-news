/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */

import { StoryTypeObject } from "../utils/const";
import { Row } from "../styledComponents/Sections";
import { Title, Author, Text, Score, Description } from "../styledComponents/Text";
import { ColoredA } from "../styledComponents/Links";
import { UnixToLocaleTime, decodeHtml } from "../utils/functions";
import { CommentCard } from "./CommentCard";
import { useQuery } from "react-query";
import { getStoriesByIds } from "../utils/HN_API";
import { StyledButton } from "../styledComponents/Buttons";

export const StoryContent = (storyData: StoryTypeObject) => {
  const story=storyData.data;
  const commentsIds = story.kids;
  
  const { isLoading, isError, data, refetch, isFetching } = useQuery("comment",  ()=>getStoriesByIds(commentsIds),
  {
    refetchOnWindowFocus: false,
  })
  
  return (
    <>
      <Title>{story.title}</Title>

      <ColoredA href={story.url}>
        <Text>Перейти к источнику</Text>
      </ColoredA>

      <Row>
        <Author>{story.by}</Author>
        <Text>{UnixToLocaleTime(story.time)}</Text>
        <Score>⭐{story.score}</Score>
      </Row>

      {story.text && <Description>{decodeHtml(story.text).replace(/<\/?[^>]+>/g, '')}</Description>}

      <Text>Комментариев: {story.descendants}</Text>

      <StyledButton onClick={() => refetch()}>
        {isFetching ? <p>Коментарии обновляются...</p> : <p>Обновить комментарии</p>}
      </StyledButton>

      {data&&data.map((comment:any)=><CommentCard key={comment.id} data={comment}/>)}
    </>
  );
};