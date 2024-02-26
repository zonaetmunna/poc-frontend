import { useContext } from 'react';

import { CartContext } from '../contexts/CartContextProvider';

export const useCart = () => {
	return useContext(CartContext);
};
