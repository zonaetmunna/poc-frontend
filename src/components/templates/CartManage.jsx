import {
  CurrencyDollarIcon,
  MinusCircleIcon,
  PencilIcon,
  PlusCircleIcon,
  TrashIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid';

import { useCart } from '../../contexts/CartContextProvider';
import Button from '../atoms/Button';
import Hr from '../atoms/Hr';

const CartManage = ({ handlePayClick }) => {
	const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, calculateSubtotal, calculateTotal } =
		useCart();

	return (
		<div className="w-1/2 bg-white px-5">
			<div className="flex justify-between items-center p-4 bg-blue-300">
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
			<div className="bg-gray-100 p-4 rounded-lg mb-4">
				<table className="w-full">
					<tbody>
						{cartItems.map((item) => (
							<tr key={item.id} className="border border-gray-300">
								<td className="border-none">
									<button>
										<PencilIcon className="h-4 w-4" />
									</button>
								</td>
								<td className="pb-2">{item.name}</td>

								<td className="pb-2 flex items-center space-x-3">
									<span>
										<CurrencyDollarIcon className="h-4 w-4" />
									</span>
									<span>{item.price.toFixed(2)}</span>
								</td>

								<td className="pb-2">
									<div>
										<button className=" rounded-md" onClick={() => increaseQuantity(item.id)}>
											<PlusCircleIcon className="h-4 w-4" />
										</button>
										<span className="mx-2">{item.quantity}</span>
										<button className="" onClick={() => decreaseQuantity(item.id)}>
											<MinusCircleIcon className="h-4 w-4" />
										</button>
									</div>
								</td>

								<td className="pb-2 flex items-center space-x-3">
									<span>
										<CurrencyDollarIcon className="h-4 w-4" />
									</span>
									<span>{(item.price * item.quantity).toFixed(2)}</span>
								</td>

								<td className="pb-2 border-none">
									<button onClick={() => removeFromCart(item.id)}>
										<TrashIcon className="h-4 w-4" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			<div className="flex justify-between items-center p-4 rounded-lg mb-4">
				<div className="w-1/2"></div>
				<div className="w-1/2">
					<Hr className="mb-2 text-blue-500" />
					<div className="flex justify-between items-center mb-2">
						<p className="text-grayDark">Subtotal:</p>
						<p className="text-dark text-lg font-medium">${calculateSubtotal().toFixed(2)}</p>
					</div>
					<hr />
					<div className="flex justify-between items-center mb-2">
						<p className="text-grayDark">Tax:</p>
						<p className="text-dark text-lg font-medium">$10.00</p>
					</div>
					<hr />
					<div className="flex justify-between items-center mb-2">
						<p className="text-grayDark">Shipping</p>
						<p className="text-dark text-lg font-medium">$5.00</p>
					</div>
					<hr />
					<div className="flex items-center justify-between">
						<p className="text-blue-600">Discount on cart</p>
						<p className="text-dark text-lg font-medium">$10.00</p>
					</div>
				</div>
			</div>

			<div className="flex items-center justify-between p-4">
				<div className="w-1/2">
					<p className="text-blue-600 text-lg font-medium">product Count</p>
				</div>
				<div className="flex items-center justify-between w-1/2">
					<h1 className="text-blue-600 font-semibold text-xl">Total</h1>
					<h1 className="text-blue-600  font-semibold text-xl">${calculateTotal().toFixed(2)}</h1>
				</div>
			</div>

			<div className="flex items-center gap-3 p-4 rounded-lg w-full">
				<Button type="button" className="bg-gray-400 text-red-700 px-5 py-3 rounded-md">
					cancel
				</Button>

				<Button type="button" className="bg-gray-400 text-blue-500 px-5 py-3 rounded-md">
					Hold
				</Button>

				<Button type="button" className="bg-gray-400 text-blue-500 px-5 py-3 rounded-md">
					Discount
				</Button>

				<Button type="button" className="bg-gray-400 text-blue-500 px-5 py-3 rounded-md" onClick={handlePayClick}>
					Pay
				</Button>
			</div>
		</div>
	);
};

export default CartManage;
