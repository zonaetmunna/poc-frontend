import { Link, useLocation } from 'react-router-dom';

const ActiveLink = ({ className = '', to = '', children }) => {
	const location = useLocation();

	return (
		<Link to={to} className={location.pathname === to ? 'text-primary' : className}>
			{children}
			<hr
				className={
					location.pathname === to
						? 'border-primary border-[1px] w-[82%] transition-all duration-300'
						: 'border-transparent border w-0'
				}
			/>
		</Link>
	);
};

export default ActiveLink;
