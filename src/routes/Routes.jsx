import { createBrowserRouter, Navigate } from 'react-router-dom';

import DashboardLayout from '../layout/DashboardLayout';
import Error from '../layout/Error';
import DashboardPage from '../pages/dashboard-pages/DashboardPage';
import Pos from '../pages/point-of-sales-pages/Pos';
import AddProductPage from '../pages/product-pages/AddProductPage';
import AllProductPage from '../pages/product-pages/AllProductPage';
import BrandsPage from '../pages/product-pages/BrandsPage';
import SettingPage from '../pages/setting-pages/SettingPage';

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <DashboardLayout />,
		errorElement: <Error />,
		children: [
			{
				path: '/',
				element: <Navigate to="/dashboard" replace />,
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
				path: '/add-product',
				element: <AddProductPage />,
			},
			{
				path: 'all-product',
				element: <AllProductPage />,
			},
			{
				path: 'brand',
				element: <BrandsPage />,
			},
			{
				path: 'setting',
				element: <SettingPage />,
			},
		],
	},
]);
