import { Bars3BottomRightIcon } from '@heroicons/react/20/solid';

import Button from '../components/atoms/Button';
import useTheme from '../hooks/useTheme';

const Navbar = ({ toggleSidebar }) => {
	const { isDarkMode } = useTheme();

	return (
		<nav className={`w-full py-5 xs:px-4 lg:px-10 ${isDarkMode ? 'bg-white' : 'bg-darkBg'}`}>
			<div className="w-full flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Button type="button" className="" onClick={toggleSidebar}>
						<Bars3BottomRightIcon className={`w-6 h-6  ${isDarkMode ? 'text-dark' : 'text-white'}`} />
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
