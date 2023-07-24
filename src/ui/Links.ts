import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
export const ColoredLinkBlueWithoutBG = styled(ColoredLink)`
	&:hover {
		background-color: transparent;
		color: #2775fc;
	}
	&:active {
		background-color: transparent;
		color: #79818c;
	}
`;
