import styled from "styled-components";
import { NewsList } from "../components/NewsList";
import { Title } from "../styledComponents/Text";

/* eslint-disable react/react-in-jsx-scope */
export const MainPage = () => {
  return (
    <MainPageWrapper>
      <Title>Main page</Title>
      <NewsList />
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.section`
  border: 1.5px solid #dce1e6;
  margin:20px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  border-radius:10px;
  padding: 5px 10px 5px;
  background: #ffffff;
`;
