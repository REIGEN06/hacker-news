import styled from 'styled-components';
import { ColoredLinkBlueWithoutBG } from '@ui/Links';
import { GITHUB_SOURCE_PATH } from '@const/routerConst';
import { Text } from '@ui/Text';

const Footer = () => {
	return (
		<NavBarWrapper>
			<Text>Все права защищены © 2023</Text>
			<Text>REIGEN06</Text>
			<FooterLink className="nav-link" to={`${GITHUB_SOURCE_PATH}`}>
				Источник на GitHub
			</FooterLink>
		</NavBarWrapper>
	);
};

export default Footer;

const NavBarWrapper = styled.section`
	align-items: center;
	justify-content: center;
	flex-direction: column;
	display: flex;
	background-color: #ffffff;
`;

const FooterLink = styled(ColoredLinkBlueWithoutBG)`
	padding: 10px;
`;
