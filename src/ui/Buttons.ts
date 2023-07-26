import styled from 'styled-components';

export const StyledButton = styled.button`
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	background: ${(props) => props.theme.BGcolors.white};
	cursor: pointer;
	border-radius: 20px;
	margin: 5px;
	padding: 5px;
	&:hover {
		background-color: ${(props) => props.theme.BGcolors.hover};
		color: ${(props) => props.theme.colors.hover};
	}
	&:active {
		background-color: ${(props) => props.theme.BGcolors.active};
		color: ${(props) => props.theme.colors.active};
	}
`;
