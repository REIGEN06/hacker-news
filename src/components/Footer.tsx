import styled from 'styled-components';
import { StyledLinkBlueWithoutBG } from '@ui/Links';
import { GITHUB_SOURCE_PATH } from '@const/routerConst';
import { Text } from '@ui/Text';

const Footer = () => {
	return (
		<FooterWrapper>
			<Text>Все права защищены © 2023</Text>
			<Text>REIGEN06</Text>
			<FooterLink className="nav-link" to={`${GITHUB_SOURCE_PATH}`}>
				Источник на GitHub
			</FooterLink>
		</FooterWrapper>
	);
};

export default Footer;

const FooterWrapper = styled.section`
	align-items: center;
	justify-content: center;
	flex-direction: column;
	display: flex;
	background-color: ${(props) => props.theme.BGcolors.white};
`;

const FooterLink = styled(StyledLinkBlueWithoutBG)`
	padding: 10px;
`;
