import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import App from './App.jsx';
import CartContextProvider from './contexts/CartContextProvider.jsx';
import { SidebarContextProvider } from './contexts/SidebarContextProvider.jsx';
import ThemeContextProvider from './contexts/ThemeContextProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeContextProvider>
			<CartContextProvider>
				<SidebarContextProvider>
					<Toaster position="top-center" />
					<App />
				</SidebarContextProvider>
			</CartContextProvider>
		</ThemeContextProvider>
	</React.StrictMode>,
);
