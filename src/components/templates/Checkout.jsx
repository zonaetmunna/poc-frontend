import { BanknotesIcon, CreditCardIcon, UserIcon, XCircleIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

import Button from '../atoms/Button';
import Card from '../organishms/Card';
import Cash from '../organishms/Cash';
import Checque from '../organishms/Checque';
import OnAccount from '../organishms/OnAccount';

const Checkout = ({ handleCloseCheckout }) => {
	const [selectedComponent, setSelectedComponent] = useState('Card');

	const handleButtonClick = (component) => {
		setSelectedComponent(component);
	};

	return (
		<div className="flex min-h-screen flex-col border border-gray-300 bg-[#F4F6F8] py-5 px-5 ">
			<div className="flex justify-between items-center border  border-gray-300 bg-[#F8F9FB] px-10 py-10 rounded-lg">
				<p className="text-lg text-[#637381]">Order Amount</p>
				<p className="text-dark font-bold text-3xl">50005</p>
			</div>

			<div className="flex  mt-5 border bg-white border-gray-300 w-full">
				<div className="w-1/3  flex flex-col pt-5 font-medium  border-r border-gray-300">
					<Button
						onClick={() => handleButtonClick('Cash')}
						className={`py-4 px-6 flex justify-start items-center rounded ${selectedComponent === 'Cash' ? 'bg-[#E7E9F6] text-[#5E6CC5]' : 'bg-white text-[#637381]'}`}
					>
						<span className="mr-4">
							<BanknotesIcon className="w-6 h-6" />
						</span>
						<span>Cash</span>
					</Button>
					<Button
						onClick={() => handleButtonClick('Card')}
						className={`py-4 px-6 flex justify-start items-center rounded ${selectedComponent === 'Card' ? 'bg-[#E7E9F6] text-[#5E6CC5]' : 'bg-white text-[#637381]'}`}
					>
						<span className="mr-4">
							<CreditCardIcon className="w-6 h-6" />
						</span>
						<span>Card</span>
					</Button>
					<Button
						onClick={() => handleButtonClick('On Account')}
						className={`py-4 px-6 flex justify-start items-center rounded ${selectedComponent === 'On Account' ? 'bg-[#E7E9F6] text-[#5E6CC5]' : 'bg-white text-[#637381]'}`}
					>
						<span className="mr-4">
							<UserIcon className="w-6 h-6" />
						</span>
						<span>On Account</span>
					</Button>
					<Button
						onClick={() => handleButtonClick('Cheque')}
						className={`py-4 px-6 flex justify-start items-center rounded ${selectedComponent === 'Cheque' ? 'bg-[#E7E9F6] text-[#5E6CC5]' : 'bg-white text-[#637381]'}`}
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

					<div className="flex justify-center pb-10">
						<div className="flex gap-5">
							<Button
								onClick={handleCloseCheckout}
								type="button"
								className="bg-[#E1EAF9] text-[#E55C57] px-5 py-3 rounded-md text-2xl font-medium flex items-center gap-3"
							>
								<span>
									<XCircleIcon className="w-7 h-7" />
								</span>{' '}
								<span>cancel</span>
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
