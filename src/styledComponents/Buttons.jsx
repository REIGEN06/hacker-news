/* eslint-disable react/react-in-jsx-scope */
import styled from "styled-components";

export const StyledButton = styled.button`
  border: 1px solid #dce1e6;
  background: #ffffff;
  border-radius:20px;
  cursor:pointer;
  margin:5px;
  padding:5px;
  &:hover {
    background-color: #f5f6f8;
  }
  &:active{
    background-color: #e6e7eb;
    color:#79818c;
}
`;