import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	text-decoration: none;
	${({ theme }) => `
	font-family: ${theme.fonts.sans};
	color: ${theme.colors.idle};
	&:hover {
		background-color: ${theme.BGcolors.hover};
		color: ${theme.colors.hover};
	}
	&:active {
		background-color: ${theme.BGcolors.active};
		color: ${theme.colors.active};
	}
	`}
`;

export const StyledLinkBlueWithoutBG = styled(StyledLink)`
	${({ theme }) => `
	color: ${theme.colors.idleBlue};
	&:hover {
		background-color: transparent;
		color: ${theme.colors.hoverBlue};
	}
	&:active {
		background-color: transparent;
		color: ${theme.colors.active};
	}
	`}
`;
