import { createContext, useState } from 'react';

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
	const [isSidebarVisible, setIsSidebarVisible] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarVisible((prevState) => !prevState);
	};

	return <SidebarContext.Provider value={{ isSidebarVisible, toggleSidebar }}>{children}</SidebarContext.Provider>;
};
