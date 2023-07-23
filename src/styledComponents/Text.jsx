import styled from "styled-components";
/* eslint-disable react/react-in-jsx-scope */

export const Title = styled.h2`
  font-family: Verdana, Geneva, sans-serif;
  font-weight: 300;
  margin:10px 5px 10px 5px;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
export const BoldTitle = styled.h2`
  font-family: Verdana, Geneva, sans-serif;
  font-weight: bold;
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
`;
export const Score = styled(Text)`
  font-weight: bold;
`;

export const Description = styled.p`
  font-family: Verdana, Geneva, sans-serif;
  font-weight: 300;
  margin:5px;
  //костыль всё, что ниже| на ссылки все равно не работает
  @media (max-width: 500px) { 
    font-size: 14px;
    max-width:200px;
  }
  @media (min-width: 500px) and (max-width: 1000px) { 
    font-size: 14px;
    max-width:400px;
  }
  @media (min-width: 1000px) and (max-width: 1500px) { 
    font-size: 14px;
    max-width:800px;
  }
  
`;