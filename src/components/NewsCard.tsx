/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { StoryType } from "../utils/const";
import { Title, Author, Text, Score } from "../styledComponents/Text";
import { Row } from "../styledComponents/Sections";

/* eslint-disable react/react-in-jsx-scope */
type StoryTypeObject = {
  data: StoryType;
};

const time = (initTime = 0)=>{
  return new Date(initTime *1000).toLocaleTimeString("ru-RU");
}

export const NewsCard = (story: StoryTypeObject) => {
  return (
    <NewsCardWrapper>
      <Title>{story.data.title}</Title>
      <Row>
        <Author>{story.data.by}</Author>
        <Text>{time(story.data.time)}</Text>
        <Score>⭐{story.data.score}</Score>
      </Row>
    </NewsCardWrapper>
  );
};

const NewsCardWrapper = styled.section`
  border: solid #dce1e6;
  border-width: 1px 0px 1px 0px;
  padding: 5px 10px 5px;
  background: #f5f6f8;
  width:100%;
`;