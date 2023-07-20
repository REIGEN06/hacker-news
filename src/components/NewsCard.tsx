/* eslint-disable react/no-unescaped-entities */
import styled, { keyframes } from "styled-components";
import { StoryType } from "../utils/const";

/* eslint-disable react/react-in-jsx-scope */
type StoryTypeObject = {
  data: StoryType;
};
export const NewsCard = (story: StoryTypeObject) => {
  console.log(story);

  return (
    <>
      <Card data={story.data}></Card>
    </>
  );
};

const StyledContainer = styled.div`
  border: 1px solid #fff;
  padding: 25px 12px 18px;
  background: linear-gradient(45deg, #86b2f5, #9fa5ff);
`;
const Title = styled.h2`
  font-weight: 300;
`;
const Date = styled.div`
  font-weight: 300;
`;
const Description = styled.p`
  font-weight: 300;
`;

const Card = (data: StoryTypeObject) => (
  <StyledContainer>
    <Title>{data.data.title}</Title>
    <Date>{data.data.time}</Date>
    <Description>{data.data.text}</Description>
  </StyledContainer>
);
