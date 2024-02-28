import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(
		localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
	);

	// Load cart items from local storage on component mount
	useEffect(() => {
		const storedCartItems = localStorage.getItem('cartItems');
		if (storedCartItems) {
			setCartItems(JSON.parse(storedCartItems));
		}
	}, []);

	// Update local storage whenever cart items change
	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	const addToCart = (product) => {
		const existingProductIndex = cartItems.findIndex((item) => item.id === product.id);

		if (existingProductIndex !== -1) {
			const updatedCart = cartItems.map((item, index) =>
				index === existingProductIndex ? { ...item, quantity: item.quantity + 1 } : item,
			);
			setCartItems(updatedCart);
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }]);
		}
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
