import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import useTheme from '../hooks/useTheme';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const DashboardLayout = () => {
	const { isDarkMode } = useTheme();
	const location = useLocation();
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarVisible(!isSidebarVisible);
	};

	const handleCloseSidebar = () => {
		setIsSidebarVisible(false);
	};

	return (
		<div className="flex relative">
			<Sidebar toggleSidebar={toggleSidebar} isSidebarVisible={isSidebarVisible} activeLinkLabel={location.pathname} />

			<main
				className={`flex-grow ${isSidebarVisible ? 'filter blur-lg' : ''} ${
					isDarkMode ? 'bg-grayBackground' : 'bg-darkBg'
				} bg-grayBackground transition-all duration-300 ease-in-out`}
			>
				<Navbar toggleSidebar={toggleSidebar} activeLinkLabel={location.pathname} />

				<div className={`xs:px-4 lg:px-10 min-h-screen ${isDarkMode ? 'bg-white' : 'bg-darkBg'}`}>
					<Outlet context={{ toggleSidebar, handleCloseSidebar }} />
				</div>
			</main>
		</div>
	);
};

export default DashboardLayout;
