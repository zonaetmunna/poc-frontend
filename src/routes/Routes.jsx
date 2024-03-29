import { createBrowserRouter, Navigate } from 'react-router-dom';

import DashboardLayout from '../layout/DashboardLayout';
import Error from '../layout/Error';
import DashboardPage from '../pages/dashboard-pages/DashboardPage';
import PocInvoicePage from '../pages/poc-invoice-page/PocInvoicePage';
import Pos from '../pages/point-of-sales-pages/Pos';
import SettingPage from '../pages/setting-pages/SettingPage';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <DashboardLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Navigate to="/poc" replace />,
			},
			{
				path: 'dashboard',
				element: <DashboardPage />,
			},
			{
				path: 'poc',
				element: <Pos />,
			},
			{
				path: 'pos-invoice',
				element: <PocInvoicePage />,
			},

			{
				path: 'setting',
				element: <SettingPage />,
			},
		],
	},
]);
