import { Menu, Transition } from '@headlessui/react';
import {
	ArrowsPointingInIcon,
	ArrowsPointingOutIcon,
	Bars3BottomRightIcon,
	BellIcon,
	ChevronDownIcon,
	EnvelopeIcon,
} from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/atoms/Button';
import useTheme from '../hooks/useTheme';

const Navbar = ({ toggleSidebar, activeLinkLabel }) => {
	const { isDarkMode } = useTheme();

	const [isFullscreen, setIsFullscreen] = useState(false);
	const [showNotifications, setShowNotifications] = useState(false);
	const [notifications, setNotifications] = useState([
		{
			id: 1,
			message: 'New order received',
			time: '10 minutes ago',
			isRead: false,
		},
		{
			id: 2,
			message: 'Product out of stock',
			time: '1 hour ago',
			isRead: true,
		},
		{
			id: 3,
			message: 'New message from customer',
			time: '2 hours ago',
			isRead: false,
		},
	]);

	const [showMessages, setShowMessages] = useState(false);
	const [messages, setMessages] = useState([
		{
			id: 1,
			sender: 'Alice',
			content: 'Hey, how are you?',
		},
		{
			id: 2,
			sender: 'Bob',
			content: 'I am doing well. Thanks for asking!',
		},
	]);
	const [newMessage, setNewMessage] = useState('');

	const handleFullscreen = () => {
		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
			setIsFullscreen(true);
		} else if (document.exitFullscreen) {
			document.exitFullscreen();
			setIsFullscreen(false);
		}
	};

	const handleNotifications = () => {
		setShowNotifications(!showNotifications);
	};

	const markAsRead = (id) => {
		setNotifications((prevState) =>
			prevState.map((notification) => (notification.id === id ? { ...notification, isRead: true } : notification)),
		);
	};

	const handleChange = (event) => {
		setNewMessage(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const id = messages.length + 1;
		const sender = 'Me';
		const content = newMessage.trim();
		if (content) {
			setMessages([...messages, { id, sender, content }]);
			setNewMessage('');
		}
	};

	return (
		<nav className={`w-full py-5 xs:px-4 lg:px-10 ${isDarkMode ? 'bg-white' : 'bg-darkBg'}`}>
			<div className="w-full flex items-center justify-between">
				<div className="flex items-center gap-4">
					<Button type="button" className="" onClick={toggleSidebar}>
						<Bars3BottomRightIcon className={`w-6 h-6  ${isDarkMode ? 'text-dark' : 'text-white'}`} />
					</Button>
					<div className={`text-2xl font-medium ${isDarkMode ? 'text-dark' : 'text-white'} `}>
						{activeLinkLabel.charAt(0) === '/'
							? activeLinkLabel.slice(1).charAt(0).toUpperCase() + activeLinkLabel.slice(2)
							: activeLinkLabel.charAt(0).toUpperCase() + activeLinkLabel.slice(1)}
					</div>
				</div>

				<div className="flex items-center">
					<div className="flex items-center">
						<Button
							className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-500"
							onClick={handleFullscreen}
						>
							{isFullscreen ? (
								<ArrowsPointingInIcon className="h-6 w-6" /> // Use the ExitFullScreenIcon when in fullscreen mode
							) : (
								<ArrowsPointingOutIcon className="h-6 w-6" /> // Use the FullScreenIcon when not in fullscreen mode
							)}
						</Button>
					</div>

					<Menu as="div" className="relative">
						<Menu.Button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none">
							<span>
								<EnvelopeIcon className="h-6 w-6" />
							</span>
						</Menu.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute right-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="p-4">
									<h2 className="font-bold text-lg mb-2">Messages</h2>
									<ul>
										{messages.map((message) => (
											<li key={message.id} className="mb-2">
												<p className="text-gray-700 font-medium">{message.sender}</p>
												<p className="text-gray-600">{message.content}</p>
											</li>
										))}
									</ul>
									<form onSubmit={handleSubmit} className="mt-4">
										<textarea
											className="w-full border rounded py-2 px-3 mb-2"
											placeholder="Type your message here"
											value={newMessage}
											onChange={handleChange}
										/>
										<button
											className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
											type="submit"
										>
											Send
										</button>
									</form>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
					{/* notification */}
					<div className="relative pl-3">
						<Button
							type="button"
							className=" p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							onClick={handleNotifications}
						>
							<BellIcon className="w-6 h-6" />
						</Button>
						<div
							className={`${
								showNotifications ? 'block' : 'hidden'
							} origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu"
						>
							<div className="py-1" role="none">
								{notifications.map((notification) => (
									<Link
										key={notification.id}
										to="#"
										className={`${notification.isRead ? 'text-gray-500' : 'text-gray-900'} block px-4 py-2 text-sm`}
										role="menuitem"
										onClick={() => markAsRead(notification.id)}
									>
										<div className="flex justify-between items-center">
											<p className="font-medium">{notification.message}</p>
											<p className="text-xs text-gray-400">{notification.time}</p>
										</div>
									</Link>
								))}
							</div>
						</div>
					</div>
					{/* profile */}
					<Menu as="div" className="relative">
						<Menu.Button className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-500 focus:outline-none">
							<span>Profile</span>
							<ChevronDownIcon className="w-5 h-5" />
						</Menu.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="py-1">
									<Menu.Item>
										{({ active }) => (
											<Link
												to="#"
												className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}
											>
												Profile
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link
												to="#"
												className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}
											>
												Settings
											</Link>
										)}
									</Menu.Item>
									<Menu.Item>
										{({ active }) => (
											<Link
												to="#"
												className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'} block px-4 py-2 text-sm`}
											>
												Logout
											</Link>
										)}
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
