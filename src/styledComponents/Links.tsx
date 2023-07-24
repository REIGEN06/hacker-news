import styled from "styled-components";
import { Link } from "react-router-dom";
/* eslint-disable react/react-in-jsx-scope */

export const ColoredLink = styled(Link)`
	font-family: Verdana, Geneva, sans-serif;
	text-decoration: none;
	color: #79818c;
	&:hover {
		background-color: #f5f6f8;
		color: black;
	}
	&:active {
		background-color: #e6e7eb;
		color: #79818c;
	}
`;
export const ColoredA = styled.a`
	font-family: Verdana, Geneva, sans-serif;
	text-decoration: none;
	padding: 10px;
	color: #0078b9;
	border-radius: 20px;
	&:hover {
		background-color: #f5f6f8;
		color: blue;
	}
	&:active {
		background-color: #e6e7eb;
		color: #79818c;
	}
`;
