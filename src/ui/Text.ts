import styled from 'styled-components';

export const Title = styled.h2<{ $isBold: boolean }>`
	font-family: ${(props) => props.theme.fonts.sans};
	font-weight: ${({ $isBold, theme: { fontWeights } }) =>
		$isBold ? fontWeights.bold : fontWeights.normal};
	margin: 5px;
`;

export const Text = styled.p<{ $isBold: boolean }>`
	font-family: ${(props) => props.theme.fonts.sans};
	font-weight: ${({ $isBold, theme: { fontWeights } }) =>
		$isBold ? fontWeights.bold : fontWeights.normal};
	margin: 5px;
`;
