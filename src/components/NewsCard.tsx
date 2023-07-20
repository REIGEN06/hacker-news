/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { StoryType } from "../utils/const";

/* eslint-disable react/react-in-jsx-scope */
type StoryTypeObject = {
  data: StoryType;
};
export const NewsCard = (story: StoryTypeObject) => {

  return (
    <>
      <Card data={story.data}></Card>
    </>
  );
};

const StyledContainer = styled.section`
  border: 1px solid #000000;
  padding: 5px 10px 5px;
  background: linear-gradient(45deg, #86b2f5, #9fa5ff);
`;
const Row = styled.section`
  align-items: center;
  display: flex;
  margin:10px;
`;

const Title = styled.h2`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 300;
  margin:10px;
`;
const Text = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-weight: 300;
  margin:0px 5px 0px 5px;
`;
const Author = styled(Text)`
  font-weight: bold;
  margin:0px 5px 0px 0px;
`;
const Score = styled(Text)`
  font-weight: bold;
  padding: 0px 0px 5px;
`;

const time = (initTime = 0)=>{
  return new Date(initTime *1000).toLocaleTimeString("ru-RU");
}

const Card = (data: StoryTypeObject) => (
  <StyledContainer>
    <Title>{data.data.title}</Title>
    <Row>
      <Author>{data.data.by}</Author>
      <Text>{time(data.data.time)}</Text>
      <Score>⭐{data.data.score}</Score>
    </Row>
  </StyledContainer>
);
