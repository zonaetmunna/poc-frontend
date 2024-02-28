import { Bars3Icon, PencilSquareIcon, PlusCircleIcon, TruckIcon } from '@heroicons/react/20/solid';
import axios from 'axios';
import { useEffect, useState } from 'react';

import Button from '../../components/atoms/Button';
import CartManage from '../../components/templates/CartManage';
import Checkout from '../../components/templates/Checkout';
import Products from '../../components/templates/Products';
import { products } from '../../constant/product.constant';
import { useSidebar } from '../../hooks/useSidebar';
import useTheme from '../../hooks/useTheme';

const Pos = () => {
	const [products2, setProducts] = useState([]);
	const [showCheckout, setShowCheckout] = useState(false);
	const { toggleSidebar } = useSidebar();
	const { isDarkMode } = useTheme();

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
			<div className="flex w-full">
				<div className="w-1/2 flex-col">
					<nav className={`py-5  w-full lg:px-10 ${isDarkMode ? 'bg-white' : 'bg-darkBg'}`}>
						<div className="flex items-center justify-between gap-3">
							<Button type="button" className="" onClick={toggleSidebar}>
								<Bars3Icon className={`w-8 h-8  ${isDarkMode ? 'text-[#4E4E4E]' : 'text-white'}`} />
							</Button>

							<Button
								type="button"
								className="bg-[#E7E9F6] text-[#5E6CC5] font-semibold text-xl px-5 py-2 rounded flex justify-center items-center gap-3 flex-1"
							>
								<span>
									<PencilSquareIcon className="size-5" />
								</span>
								<span>Note</span>
							</Button>

							<Button
								type="button"
								className="bg-[#E7E9F6] text-[#5E6CC5] font-semibold text-xl px-5 py-2 rounded flex justify-center items-center gap-3 flex-1"
							>
								<span>
									<TruckIcon className="size-5" />
								</span>
								<span>Shipping</span>
							</Button>
							<Button
								type="button"
								className="bg-[#E7E9F6] text-[#5E6CC5] font-semibold text-xl flex justify-center items-center px-5 py-2 rounded flex-1"
							>
								<span></span>
								<span>Hold Orders</span>
							</Button>
							<Button
								type="button"
								className="bg-[#E7E9F6] text-[#5E6CC5] font-semibold text-xl px-5 py-2 rounded flex justify-center items-center gap-3 flex-1"
							>
								<span>
									<PlusCircleIcon className="w-5 h-5" />
								</span>
								<span>New Item</span>
							</Button>
						</div>
					</nav>

					<div className="w-full ">
						<CartManage handlePayClick={handlePayClick} />
					</div>
				</div>

				<div className="w-1/2">
					{showCheckout ? <Checkout handleCloseCheckout={handleCloseCheckout} /> : <Products />}
				</div>
			</div>
		</div>
	);
};

export default Pos;
