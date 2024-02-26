import { CircleStackIcon, Cog6ToothIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { Link, useLocation } from 'react-router-dom';

import Button from '../components/atoms/Button';
import useTheme from '../hooks/useTheme';

const SidebarLink = ({ to, icon, label, toggleSidebar }) => {
	const location = useLocation();

	return (
		<Link to={to} onClick={toggleSidebar}>
			<div
				className={`flex items-center mb-4  py-2 px-4 rounded-lg cursor-pointer ${location.pathname === to ? 'bg-gray-200' : ''}`}
			>
				{icon}
				<span className="ml-3">{label}</span>
			</div>
		</Link>
	);
};

const Sidebar = ({ toggleSidebar, activeLinkLabel, isSidebarVisible }) => {
	const { isDarkMode } = useTheme();

	const links = [
		{ to: '/dashboard', icon: <CircleStackIcon className="h-5 w-5" />, label: 'Dashboard' },
		{ to: '/poc', icon: <CircleStackIcon className="h-5 w-5" />, label: 'Locations' },
		{ to: '/pos-invoices', icon: <CircleStackIcon className="h-5 w-5" />, label: 'POS Invoice' },
		{ to: '/setting', icon: <Cog6ToothIcon className="h-5 w-5" />, label: 'Settings' },
	];

	return (
		<div>
			<div
				className={`w-80 min-h-screen ${isDarkMode ? 'bg-white' : 'bg-darkBg'}
           ${isSidebarVisible ? 'fixed left-0 top-0 z-50 inset-0  overflow-auto scrollbar-hide transition-all duration-300 ease-in-out' : 'hidden'}`}
			>
				<button
					onClick={toggleSidebar}
					className={`fixed top-4 right-4 z-10 text-darkBg focus:outline-none ${isSidebarVisible ? 'block' : 'hide'}`}
				>
					<XMarkIcon className="h-6 w-6" />
				</button>
				<div className="">
					<div className="bg-offWhite">
						<div className="mb-16 px-12 pt-10 flex justify-between items-center">
							<h1 className="text-3xl font-bold">
								<span className="text-dark">go</span>
								<span className="text-primary">B</span>
								<span className="text-dark">illing</span>
							</h1>
						</div>
						<div className="pl-5 py-3">
							<p className="font-bold mb-2">Location:</p>
							<p className="font-semibold mb-2 text-2xl">Los Angeles, California</p>
						</div>
					</div>
					<div className="bg-white">
						{links.map((link, index) => (
							<SidebarLink key={index} {...link} activeLinkLabel={activeLinkLabel} toggleSidebar={toggleSidebar} />
						))}

						<div className="">
							<div
								className={`mb-4  ${isDarkMode ? 'border border-gray-300' : 'border border-primary'} rounded-lg px-12 py-3`}
							>
								<Button
									type="button"
									className="text-gray-300 text-center hover:text-gray-500 flex justify-center items-center"
								>
									Logout
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;

/* const links = [
		{ to: '/dashboard', icon: <CircleStackIcon />, label: 'Dashboard' },
		{
			to: '/Product',
			icon: <CircleStackIcon />,
			label: 'Product',
			sublinks: [
				{ to: '/add-product', label: 'Add Product' },
				{ to: '/all-product', label: 'All Products' },
				{ to: '/brand', label: 'Brand' },
				{ to: '/category', label: 'Category' },
			],
		},
		// point of sales
		{
			to: '/point-of-sales',
			icon: <CircleStackIcon />,
			label: 'POS Invoice',
		},
		// settings
		{
			to: '/settings',
			icon: <Cog6ToothIcon />,
			label: 'Settings',
			sublinks: [
				{ to: '/profile', label: 'Profile' },
				{ to: '/change-password', label: 'Change Password' },
			],
		},
		// for sales
		{
			to: '/sales',
			icon: <CircleStackIcon />,
			label: 'Sales',
			sublinks: [
				{ to: '/add-sales', label: 'Add Sales' },
				{ to: '/all-sales', label: 'All Sales' },
				{ to: 'payment', label: 'Payment' },
				{ to: 'invoice', label: 'Invoice' },
			],
		},
		{
			to: '/vendor',
			icon: <CircleStackIcon />,
			label: 'Vendor',
			sublinks: [
				{ to: '/add-vendor', label: 'Add Vendor' },
				{ to: '/all-vendors', label: 'All Vendors' },
			],
		},
		{
			to: '/customer',
			icon: <CircleStackIcon />,
			label: 'Customer',
			sublinks: [
				{ to: '/add-customer', label: 'Add Customer' },
				{ to: '/all-customers', label: 'All Customers' },
			],
		},
		{
			to: '/stock',
			icon: <CircleStackIcon />,
			label: 'Stock',
			sublinks: [],
		},
		// for banking and transaction
		{
			to: '/banking',
			icon: <CircleStackIcon />,
			label: 'Banking',
			sublinks: [{ to: '/add-banking', label: 'Add Banking' }],
		},
		// for blog
		{
			to: '/blog',
			icon: <CircleStackIcon />,
			label: 'Blog',
			sublinks: [
				{ to: '/add-blog', label: 'Add Blog' },
				{ to: '/all-blog', label: 'All Blog' },
			],
		},

		// Add other sidebar links as necessary
	]; */
