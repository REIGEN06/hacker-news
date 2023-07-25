import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import StoryPage from './pages/StoryPage';
import ErrorPage from './pages/ErrorPage';
import RouteLayout from '@components/RouteLayout';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" Component={RouteLayout}>
					<Route index Component={MainPage} />
					<Route path="item/:id" Component={StoryPage} />
					<Route path="*" Component={ErrorPage} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
