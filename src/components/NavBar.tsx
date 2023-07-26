import styled from 'styled-components';
import { StyledLink } from '@ui/Links';
import { ReactComponent as HomeIcon } from '@ui/icons/homeIcon.svg';
import SearchStory from './SearchStory';

const NavBar = () => {
	return (
		<NavBarWrapper>
			<NavbarLink className="nav-link" to="/">
				<HomeIcon />
			</NavbarLink>
			<SearchStory />
		</NavBarWrapper>
	);
};

export default NavBar;

const NavBarWrapper = styled.section`
	align-items: center;
	justify-content: space-between;
	display: flex;
	background-color: ${(props) => props.theme.BGcolors.white};
	box-shadow: 0px 2px ${(props) => `${props.theme.borders.gray}`};
	position: sticky;
	padding: 0px 20px;
`;

const NavbarLink = styled(StyledLink)`
	padding: 10px;
`;
