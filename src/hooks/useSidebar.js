import { useContext } from 'react';

import { SidebarContext } from '../contexts/SidebarContextProvider';

export const useSidebar = () => {
	return useContext(SidebarContext);
};
