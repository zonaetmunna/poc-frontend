import { BanknotesIcon, CreditCardIcon, UserIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

import Button from '../atoms/Button';
import Card from '../organishms/Card';
import Cash from '../organishms/Cash';
import Checque from '../organishms/Checque';
import OnAccount from '../organishms/OnAccount';

const Checkout = ({ handleCloseCheckout }) => {
	const [selectedComponent, setSelectedComponent] = useState(null);

	const handleButtonClick = (component) => {
		setSelectedComponent(component);
	};

	return (
		<div className="flex flex-col border border-gray-300 bg-gray-300 p-5 min-h-screen">
			<div className="flex justify-between border border-gray-300 bg-gray-200 px-10 py-10 rounded-lg">
				<p className="text-base text-gray-400">Order Amount</p>
				<p className="text-dark font-bold text-3xl">50005</p>
			</div>

			<div className="flex min-h-screen mt-5 border bg-white border-gray-300 w-full">
				<div className="w-1/3  flex flex-col pt-5  border-r border-gray-300">
					<Button
						onClick={() => handleButtonClick('Cash')}
						className={`p-2 flex justify-start items-center rounded ${selectedComponent === 'Cash' ? 'bg-blue-200 text-blue-800' : 'bg-white text-darkBg'}`}
					>
						<span className="mr-4">
							<BanknotesIcon className="w-6 h-6" />
						</span>
						<span>Cash</span>
					</Button>
					<Button
						onClick={() => handleButtonClick('Card')}
						className={`p-2 flex justify-start items-center rounded ${selectedComponent === 'Card' ? 'bg-blue-200 text-blue-800' : 'bg-white text-darkBg'}`}
					>
						<span className="mr-4">
							<CreditCardIcon className="w-6 h-6" />
						</span>
						<span>Card</span>
					</Button>
					<Button
						onClick={() => handleButtonClick('On Account')}
						className={`p-2 flex justify-start items-center rounded ${selectedComponent === 'On Account' ? 'bg-blue-200 text-blue-800' : 'bg-white text-darkBg'}`}
					>
						<span className="mr-4">
							<UserIcon className="w-6 h-6" />
						</span>
						<span>On Account</span>
					</Button>
					<Button
						onClick={() => handleButtonClick('Cheque')}
						className={`p-2 flex justify-start items-center rounded ${selectedComponent === 'Cheque' ? 'bg-blue-200 text-blue-800' : 'bg-white text-darkBg'}`}
					>
						<span className="mr-4">
							<CreditCardIcon className="w-6 h-6" />
						</span>
						<span>Cheque</span>
					</Button>
				</div>

				<div className="w-2/3 flex flex-col justify-between">
					<div>
						{selectedComponent === 'Cash' && <Cash />}
						{selectedComponent === 'Card' && <Card />}
						{selectedComponent === 'On Account' && <OnAccount />}
						{selectedComponent === 'Cheque' && <Checque />}
					</div>

					<div>
						<div className="flex gap-5">
							<Button onClick={handleCloseCheckout} className="bg-gray-400 rounded text-red-500 px-5 py-3">
								cancel
							</Button>
							<Button className="bg-blue-700 text-white font-semibold text-3xl px-5 py-3 rounded">
								Complete Payment
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
