import { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContextProvider';

const useTheme = () => {
	return useContext(ThemeContext);
};

export default useTheme;
