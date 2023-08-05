import styled from 'styled-components';

export const StyledButton = styled.button<{
	padding: string;
	margin: string;
}>`
	cursor: pointer;
	border-radius: 20px;
	margin: ${(props) => props?.margin || '5px'};
	padding: ${(props) => props?.padding || '5px'};
	${({ theme }) => `
	border: 1px solid ${theme.borders.gray};
	background: ${theme.BGcolors.white};
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
