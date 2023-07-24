import styled from 'styled-components';
import { ColoredLink } from '../ui/Links';
import { Svg } from '../ui/Icons';

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

const HomeIcon = () => (
	<Svg viewBox="0 0 16 16">
		<path
			fill="#79818c"
			d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"
		/>
	</Svg>
);
