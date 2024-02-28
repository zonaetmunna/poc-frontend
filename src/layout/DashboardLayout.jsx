import { Outlet, useLocation } from 'react-router-dom';

import { useSidebar } from '../hooks/useSidebar';
import useTheme from '../hooks/useTheme';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
	const { isDarkMode } = useTheme();
	const location = useLocation();
	const { isSidebarVisible, toggleSidebar } = useSidebar();

	return (
		<div className="flex relative bg-white min-h-screen">
			<Sidebar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} activeLinkLabel={location.pathname} />

			<main
				className={`flex-grow ${isSidebarVisible ? 'filter blur-lg' : ''} ${
					isDarkMode ? 'bg-grayBackground' : 'bg-darkBg'
				} bg-grayBackground transition-all duration-300 ease-in-out`}
			>
				<div className={`min-h-screen ${isDarkMode ? 'bg-white' : 'bg-darkBg'}`}>
					<Outlet />
				</div>
			</main>
		</div>
	);
};

export default DashboardLayout;
