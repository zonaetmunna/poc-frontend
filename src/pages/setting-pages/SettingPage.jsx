import { ArrowLeftCircleIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

import Button from '../../components/atoms/Button';

const SettingPage = () => {
	const [isModalOpen, setIsModalOpen] = useState(true); // Set initial state to true for default open

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	return (
		<div
			className={`fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 ${isModalOpen ? 'block' : 'hidden'}`}
		>
			<div className="bg-white p-8 rounded-lg w-1/3  ">
				<div className="flex items-center mb-4">
					<span onClick={toggleModal} className="cursor-pointer">
						<ArrowLeftCircleIcon className="h-6 w-6 text-dark" />
					</span>
					<h1 className="text-3xl text-center ml-4">Setting</h1>
				</div>

				<div className="mb-4">
					<Button
						type="button"
						onClick={toggleModal}
						className={`px-5 py-5 ${isModalOpen ? 'bg-gray-500 text-white font-semibold border-b-2 border-gray-600' : 'bg-gray-200 font-normal'}`}
					>
						Tax on
					</Button>
					<button type="button" onClick={toggleModal} className={`${isModalOpen ? '' : 'bg-blue-500 text-white'}`}>
						Tax Type
					</button>
				</div>

				{/* Modal Content */}
				<div>
					<div className="flex items-center mb-4 space-x-3">
						<input type="radio" name="taxType" />
						<label className="mr-4">After Discount</label>
					</div>
					<div className="flex items-center space-x-3">
						<input type="radio" name="taxType" />
						<label className="mr-4">Before Discount</label>
					</div>
					<button onClick={toggleModal} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
						Update
					</button>
				</div>
			</div>
		</div>
	);
};

export default SettingPage;
