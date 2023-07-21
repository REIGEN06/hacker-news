import { HomeIcon} from "../styledComponents/Icons";
import {Link} from "react-router-dom";
import styled from "styled-components";
/* eslint-disable react/react-in-jsx-scope */
export const NavBar = () => {
  return (
    <NavBarWrapper>
      <NavbarLink className="nav-link" to="/">
        <HomeIcon/>
      </NavbarLink>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.section`
  align-items: center;
  justify-content: center;
  display: flex;
  background-color:#ffffff;
  box-shadow: 0px 1px #dce1e6;
  position: sticky;
`;

const NavbarLink = styled(Link)`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-decoration: none;
  padding: 10px;
  color:#79818c;
  &:hover {
    background-color: #f5f6f8;
  }
  &:active{
    background-color: #e6e7eb;
    color:#79818c;
}`;