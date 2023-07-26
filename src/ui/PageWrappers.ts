import styled from 'styled-components';

export const LayoutWrapper = styled.section`
	background: ${(props) => props.theme.BGcolors.gray};
`;

export const DefaultPageWrapper = styled.section`
	background: ${(props) => props.theme.BGcolors.white};
	border: ${(props) => `1px solid ${props.theme.borders.gray}`};
	margin: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	padding: 5px 10px;
`;
