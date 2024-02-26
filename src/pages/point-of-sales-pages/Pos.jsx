import axios from 'axios';
import { useEffect, useState } from 'react';

import CartManage from '../../components/templates/CartManage';
import Checkout from '../../components/templates/Checkout';
import Products from '../../components/templates/Products';
import { products } from '../../constant/product.constant';

const Pos = () => {
	const [products2, setProducts] = useState([]);
	const [showCheckout, setShowCheckout] = useState(false);

	const handlePayClick = () => {
		setShowCheckout(true);
	};

	const handleCloseCheckout = () => {
		setShowCheckout(false);
	};

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get(products);
				setProducts(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchProducts();
	}, []);

	console.log(products2);

	return (
		<div className="w-full bg-white">
			<div className="flex ">
				<CartManage handlePayClick={handlePayClick} />

				<div className="w-1/2">
					{showCheckout ? <Checkout handleCloseCheckout={handleCloseCheckout} /> : <Products />}
				</div>
			</div>
		</div>
	);
};

export default Pos;
