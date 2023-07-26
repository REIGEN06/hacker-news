import styled from 'styled-components';

export const StyledButton = styled.button<{
	$padding: string;
	$margin: string;
}>`
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	background: ${(props) => props.theme.BGcolors.white};
	cursor: pointer;
	border-radius: 20px;
	margin: ${(props) => props?.$margin || '5px'};
	padding: ${(props) => props?.$padding || '5px'};
	&:hover {
		background-color: ${(props) => props.theme.BGcolors.hover};
		color: ${(props) => props.theme.colors.hover};
	}
	&:active {
		background-color: ${(props) => props.theme.BGcolors.active};
		color: ${(props) => props.theme.colors.active};
	}
`;
