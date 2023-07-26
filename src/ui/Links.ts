import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ColoredLink = styled(Link)`
	text-decoration: none;
	font-family: ${(props) => props.theme.fonts.sans};
	color: ${(props) => props.theme.colors.idle};
	&:hover {
		background-color: ${(props) => props.theme.BGcolors.hover};
		color: ${(props) => props.theme.colors.hover};
	}
	&:active {
		background-color: ${(props) => props.theme.BGcolors.active};
		color: ${(props) => props.theme.colors.active};
	}
`;
export const ColoredLinkBlueWithoutBG = styled(ColoredLink)`
	color: ${(props) => props.theme.colors.idleBlue};
	&:hover {
		background-color: transparent;
		color: ${(props) => props.theme.colors.hoverBlue};
	}
	&:active {
		background-color: transparent;
		color: ${(props) => props.theme.colors.active};
	}
`;
