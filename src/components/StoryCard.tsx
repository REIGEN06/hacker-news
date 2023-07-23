/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */

import styled from "styled-components";
import { StoryTypeObject } from "../utils/const";
import { Title, Author, Text, Score } from "../styledComponents/Text";
import { Row } from "../styledComponents/Sections";
import { ColoredLink } from "../styledComponents/Links";
import { UnixToLocaleTime } from "../utils/functions";

export const StoryCard = (storyData: StoryTypeObject) => {
  const story = storyData.data;
  const commentsCount = story.descendants;
  const path = `/item/${story.id}`;
  return (
    <NewsCardWrapperLink className="nav-link" to={path}>
        <Title>{story.title}</Title>
        <Row>
          <Author>{story.by}</Author>
          <Text>{UnixToLocaleTime(story.time)}</Text>
          <Score>⭐{story.score}</Score>
        </Row>
        <Text>{commentsCount} {
        commentsCount && commentsCount > 0 
        ? "комментарий"
        : commentsCount && commentsCount > 1 
        ? "комментария" 
        : "комментариев"} 
      </Text>
    </NewsCardWrapperLink>
  );
};

const NewsCardWrapperLink = styled(ColoredLink)`
  border: solid #dce1e6;
  border-width: 1px 0px 1px 0px;
  padding: 5px 10px 5px;
  width:100%;
`;