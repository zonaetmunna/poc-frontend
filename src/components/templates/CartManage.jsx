import {
	CurrencyDollarIcon,
	MinusCircleIcon,
	PencilIcon,
	PlusCircleIcon,
	TrashIcon,
	UserCircleIcon,
	XCircleIcon,
} from '@heroicons/react/20/solid';
import { useState } from 'react';

import { useCart } from '../../contexts/CartContextProvider';
import Button from '../atoms/Button';
import Hr from '../atoms/Hr';
import AddCustomer from '../organishms/AddCustomer';

const CartManage = ({ handlePayClick }) => {
	const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, calculateSubtotal, calculateTotal } =
		useCart();

	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<>
			<div className="bg-white">
				<div
					className="flex justify-between items-center p-4 bg-[#E7E9F6] text-[#5E6CC5] font-semibold rounded cursor-pointer"
					onClick={toggleModal}
				>
					<div className="flex items-center space-x-3">
						<span>
							<UserCircleIcon className="h-7 w-7" />
						</span>
						<span className="text-lg font-semibold">Steve Jobs</span>
					</div>
					<div>
						<PlusCircleIcon className="h-7 w-7" />
					</div>
				</div>

				{cartItems.length === 0 ? ( // Check if cartItems array is empty
					<div className=" rounded-lg my-4 text-[#637381] font-medium text-center">Your cart is empty.</div>
				) : (
					<div className=" rounded-lg my-4 text-[#637381] font-medium">
						<table className="w-full">
							<tbody>
								{cartItems.map((item) => (
									<tr key={item.id} className="border border-gray-300">
										{/* Edit Icon */}
										<td className="border-none px-2 py-3">
											<button>
												<PencilIcon className="h-4 w-4" />
											</button>
										</td>

										<td className="px-2 py-3">{item.name}</td>

										<td className="px-2 py-3 flex items-center space-x-3">
											<span>
												<CurrencyDollarIcon className="h-4 w-4" />
											</span>
											<span>{item.price.toFixed(2)}</span>
										</td>

										<td className="px-2 py-3">
											<div className="flex items-center space-x-3">
												<button className="rounded-md" onClick={() => increaseQuantity(item.id)}>
													<PlusCircleIcon className="h-6 w-6" />
												</button>
												<span className="mx-2">{item.quantity}</span>
												<button className="" onClick={() => decreaseQuantity(item.id)}>
													<MinusCircleIcon className="h-6 w-6" />
												</button>
											</div>
										</td>

										<td className="px-2 py-3 flex items-center space-x-3">
											<span>
												<CurrencyDollarIcon className="h-4 w-4" />
											</span>
											<span>{(item.price * item.quantity).toFixed(2)}</span>
										</td>

										{/* Delete Icon */}
										<td className="px-2 py-3 border-none">
											<button onClick={() => removeFromCart(item.id)}>
												<TrashIcon className="h-4 w-4" />
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
				<div className="flex justify-between items-center p-4 rounded-lg mb-4">
					<div className="w-1/2"></div>
					<div className="w-1/2">
						<Hr className="mb-2 text-blue-500" />
						<div className="flex justify-between items-center mb-2">
							<p className="text-[#637381] font-medium text-lg">Subtotal:</p>
							<p className="text-dark text-2xl font-medium">${calculateSubtotal().toFixed(2)}</p>
						</div>
						<hr />
						<div className="flex justify-between items-center mb-2">
							<p className="text-[#637381] font-medium text-lg">Tax:</p>
							<p className="text-dark text-2xl font-medium">$10.00</p>
						</div>
						<hr />
						<div className="flex justify-between items-center mb-2">
							<p className="text-[#637381] font-medium text-lg">Shipping</p>
							<p className="text-dark text-2xl font-medium">$5.00</p>
						</div>
						<hr />
						<div className="flex items-center justify-between">
							<p className="text-[#3674D9] font-semibold text-lg">Discount on cart</p>
							<p className="text-dark text-2xl font-medium">$10.00</p>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-between p-4 bg-[#E1EAF9]">
					<div className="w-1/2">
						<p className="text-blue-600 text-lg font-medium">product Count ({cartItems.length})</p>
					</div>
					<div className="flex items-center justify-between w-1/2">
						<h1 className="text-blue-600 font-semibold text-3xl">Total</h1>
						<h1 className="text-blue-600  font-semibold text-3xl">${calculateTotal().toFixed(2)}</h1>
					</div>
				</div>

				<div className="flex items-center gap-3 mt-5 rounded-lg w-full">
					<Button
						type="button"
						className="bg-[#E1EAF9] text-[#E55C57] px-5 py-3 rounded-md text-2xl font-medium flex justify-center items-center flex-1 gap-3"
					>
						<span>
							<XCircleIcon className="size-6" />
						</span>{' '}
						<span>cancel</span>
					</Button>

					<Button
						type="button"
						className="bg-[#E1EAF9] text-[#3674D9] px-5 py-3 rounded-md text-2xl flex justify-center items-center flex-1 font-medium"
					>
						Hold
					</Button>

					<Button
						type="button"
						className="bg-[#E1EAF9] text-[#3674D9] px-5 py-3 rounded-md text-2xl flex justify-center items-center flex-1 font-medium"
					>
						Discount
					</Button>

					<Button
						type="button"
						className="bg-[#E1EAF9] text-[#3674D9] px-5 py-3 rounded-md text-2xl font-medium flex justify-center items-center flex-1 gap-2"
						onClick={handlePayClick}
					>
						Pay
					</Button>
				</div>
			</div>
			{/* Modal Content */}

			{isModalOpen && <AddCustomer toggleModal={toggleModal} />}
		</>
	);
};

export default CartManage;
