import styled from 'styled-components';

export const LayoutWrapper = styled.section`
	background: ${(props) => props.theme.BGcolors.gray};
`;

export const DefaultPageWrapper = styled.section`
	background: ${(props) => props.theme.BGcolors.white};
	margin: 20px;
	padding: 5px 10px;
`;
