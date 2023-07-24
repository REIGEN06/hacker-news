import { HomeIcon } from '../styledComponents/Icons';
import styled from 'styled-components';
import { ColoredLink } from '../styledComponents/Links';

const NavBar = () => {
	return (
		<NavBarWrapper>
			<NavbarLink className="nav-link" to="/">
				<HomeIcon />
			</NavbarLink>
		</NavBarWrapper>
	);
};

export default NavBar;

const NavBarWrapper = styled.section`
	align-items: center;
	justify-content: center;
	display: flex;
	background-color: #ffffff;
	box-shadow: 0px 1px #dce1e6;
	position: sticky;
`;

const NavbarLink = styled(ColoredLink)`
	padding: 10px;
`;
