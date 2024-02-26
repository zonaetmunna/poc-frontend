import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (product) => {
		setCartItems([...cartItems, { ...product, quantity: 1 }]);
	};

	const removeFromCart = (productId) => {
		const updatedCart = cartItems.filter((item) => item.id !== productId);
		setCartItems(updatedCart);
	};

	const increaseQuantity = (productId) => {
		const updatedCart = cartItems.map((item) =>
			item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
		);
		setCartItems(updatedCart);
	};

	const decreaseQuantity = (productId) => {
		const updatedCart = cartItems.map((item) =>
			item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item,
		);
		setCartItems(updatedCart);
	};

	const calculateSubtotal = () => {
		return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
	};

	const calculateTotal = () => {
		// Add tax, shipping, discounts, etc., if applicable
		return calculateSubtotal();
	};

	return (
		<CartContext.Provider
			value={{
				cartItems,
				addToCart,
				removeFromCart,
				increaseQuantity,
				decreaseQuantity,
				calculateSubtotal,
				calculateTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

export default CartContextProvider;

export const useCart = () => {
	return useContext(CartContext);
};
