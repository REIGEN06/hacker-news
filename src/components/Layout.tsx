import { LayoutWrapper } from '@ui/PageWrappers';
import Theme from '@ui/Theme';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const Layout = () => {
	return (
		<Theme>
			<LayoutWrapper>
				<NavBar />
				<Outlet />
				<Footer />
			</LayoutWrapper>
		</Theme>
	);
};

export default Layout;
