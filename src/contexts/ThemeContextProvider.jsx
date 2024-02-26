import Cookies from 'js-cookie';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const storedTheme = Cookies.get('theme');
	const initialTheme = storedTheme ? JSON.parse(storedTheme) : false;

	const [isDarkMode, setIsDarkMode] = useState(initialTheme);

	useEffect(() => {
		Cookies.set('theme', JSON.stringify(isDarkMode), { expires: 365 }); // Expires in 365 days
	}, [isDarkMode]);

	const toggleDarkMode = () => {
		const newTheme = !isDarkMode;
		setIsDarkMode(newTheme);
	};

	return <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};

export default ThemeContextProvider;
