import styled from "styled-components";
/* eslint-disable react/react-in-jsx-scope */

export const Title = styled.h2`
  font-family: Verdana, Geneva, sans-serif;
  font-weight: 300;
  margin:10px;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const Text = styled.p`
  font-family: Verdana, Geneva, sans-serif;
  font-weight: 300;
  margin:0px 5px 0px 5px;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;
export const Author = styled(Text)`
  font-weight: bold;
  margin:0px 5px 0px 0px;
`;
export const Score = styled(Text)`
  font-weight: bold;
  padding: 0px 0px 5px;
`;