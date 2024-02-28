import { ChevronLeftIcon } from '@heroicons/react/20/solid';

const AddCustomer = ({ toggleModal }) => {
	return (
		<div className={`fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-50 `}>
			<div className="bg-white p-8 rounded-lg w-1/4">
				<div className="flex items-center  mb-4">
					<span onClick={toggleModal} className="cursor-pointer">
						<ChevronLeftIcon className="h-6 w-6 text-dark" />
					</span>
					<h1 className="text-3xl text-center ml-4">Add New Customer</h1>
				</div>

				{/* Modal Content */}

				<div className="w-full max-w-md bg-white  rounded py-5">
					<div className="mb-4">
						<input
							className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="name"
							type="text"
							placeholder="Name"
						/>
					</div>
					<div className="mb-4">
						<input
							className=" appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="email"
						/>
					</div>
					<div className="mb-4">
						<input
							className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="phone"
							type="number"
							placeholder="Phone"
						/>
					</div>

					<div className="mb-4">
						<input
							className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="currency"
							type="text"
							placeholder="Currency"
						/>
					</div>
					<div className="mb-4">
						<input
							className="appearance-none border-b rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="tax-id"
							type="text"
							placeholder="Tax Id"
						/>
					</div>
					<button onClick={toggleModal} className="mt-4 w-full bg-blue-500 text-white px-4 py-2 rounded-md">
						Update
					</button>
				</div>
			</div>
		</div>
	);
};

export default AddCustomer;
